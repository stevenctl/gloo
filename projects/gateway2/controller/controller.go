package controller

import (
	"context"
	"fmt"

	sologatewayv1 "github.com/solo-io/gloo/projects/gateway/pkg/api/v1/kube/apis/gateway.solo.io/v1"
	"github.com/solo-io/gloo/projects/gateway2/deployer"
	"github.com/solo-io/gloo/projects/gateway2/extensions"
	"github.com/solo-io/gloo/projects/gateway2/pkg/api/gateway.gloo.solo.io/v1alpha1"
	"github.com/solo-io/gloo/projects/gateway2/query"
	rtoptquery "github.com/solo-io/gloo/projects/gateway2/translator/plugins/routeoptions/query"
	vhoptquery "github.com/solo-io/gloo/projects/gateway2/translator/plugins/virtualhostoptions/query"
	"github.com/solo-io/gloo/projects/gateway2/wellknown"
	"github.com/solo-io/gloo/projects/gloo/pkg/bootstrap"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/api/meta"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/fields"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/builder"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/handler"
	"sigs.k8s.io/controller-runtime/pkg/log"
	"sigs.k8s.io/controller-runtime/pkg/manager"
	"sigs.k8s.io/controller-runtime/pkg/predicate"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
	apiv1 "sigs.k8s.io/gateway-api/apis/v1"
	apiv1beta1 "sigs.k8s.io/gateway-api/apis/v1beta1"
)

const (
	// field name used for indexing
	GatewayParamsField = "gateway-params"
)

type GatewayConfig struct {
	Mgr            manager.Manager
	GWClass        apiv1.ObjectName
	Dev            bool
	ControllerName string
	AutoProvision  bool
	Kick           func(ctx context.Context)

	ControlPlane bootstrap.ControlPlane
	IstioValues  bootstrap.IstioValues

	Extensions extensions.K8sGatewayExtensions
}

func NewBaseGatewayController(ctx context.Context, cfg GatewayConfig) error {
	log := log.FromContext(ctx)
	log.V(5).Info("starting controller", "controllerName", cfg.ControllerName, "gwclass", cfg.GWClass)

	controllerBuilder := &controllerBuilder{
		cfg: cfg,
		reconciler: &controllerReconciler{
			cli:    cfg.Mgr.GetClient(),
			scheme: cfg.Mgr.GetScheme(),
			kick:   cfg.Kick,
		},
	}

	return run(ctx,
		controllerBuilder.watchGwClass,
		controllerBuilder.watchGw,
		controllerBuilder.watchHttpRoute,
		controllerBuilder.watchReferenceGrant,
		controllerBuilder.watchNamespaces,
		controllerBuilder.watchRouteOptions,
		controllerBuilder.watchVirtualHostOptions,
		controllerBuilder.addIndexes,
		controllerBuilder.addRtOptIndexes,
		controllerBuilder.addVhOptIndexes,
		controllerBuilder.addGwParamsIndexes,
	)

}

func run(ctx context.Context, funcs ...func(ctx context.Context) error) error {
	for _, f := range funcs {
		if err := f(ctx); err != nil {
			return err
		}
	}
	return nil
}

type controllerBuilder struct {
	cfg GatewayConfig

	reconciler *controllerReconciler
}

func (c *controllerBuilder) addIndexes(ctx context.Context) error {
	return query.IterateIndices(func(obj client.Object, field string, indexer client.IndexerFunc) error {
		return c.cfg.Mgr.GetFieldIndexer().IndexField(ctx, obj, field, indexer)
	})
}

func (c *controllerBuilder) addGwParamsIndexes(ctx context.Context) error {
	return c.cfg.Mgr.GetFieldIndexer().IndexField(ctx, &apiv1.Gateway{}, GatewayParamsField, gatewayToParams)
}

// gatewayToParams is an IndexerFunc that gets a GatewayParameters name from a Gateway
func gatewayToParams(obj client.Object) []string {
	gw, ok := obj.(*apiv1.Gateway)
	if !ok {
		panic(fmt.Sprintf("wrong type %T provided to indexer. expected Gateway", obj))
	}
	gwpName := gw.GetAnnotations()[wellknown.GatewayParametersAnnotationName]
	if gwpName != "" {
		return []string{gwpName}
	}
	return []string{}
}

// TODO: move to RtOpt plugin when breaking the logic to RouteOption-specific controller
func (c *controllerBuilder) addRtOptIndexes(ctx context.Context) error {
	return rtoptquery.IterateIndices(func(obj client.Object, field string, indexer client.IndexerFunc) error {
		return c.cfg.Mgr.GetFieldIndexer().IndexField(ctx, obj, field, indexer)
	})
}

// TODO: move to VhOpt plugin when breaking the logic to VirtualHostOption-specific controller
func (c *controllerBuilder) addVhOptIndexes(ctx context.Context) error {
	return vhoptquery.IterateIndices(func(obj client.Object, field string, indexer client.IndexerFunc) error {
		return c.cfg.Mgr.GetFieldIndexer().IndexField(ctx, obj, field, indexer)
	})
}

func (c *controllerBuilder) watchGw(ctx context.Context) error {
	// setup a deployer
	log := log.FromContext(ctx)

	log.Info("creating deployer", "ctrlname", c.cfg.ControllerName, "server", c.cfg.ControlPlane.GetBindAddress(), "port", c.cfg.ControlPlane.GetBindPort())
	d, err := deployer.NewDeployer(c.cfg.Mgr.GetClient(), &deployer.Inputs{
		ControllerName: c.cfg.ControllerName,
		Dev:            c.cfg.Dev,
		IstioValues:    c.cfg.IstioValues,
		ControlPlane:   c.cfg.ControlPlane,
		Extensions:     c.cfg.Extensions,
	})
	if err != nil {
		return err
	}

	gvks, err := d.GetGvksToWatch(ctx)
	if err != nil {
		return err
	}

	buildr := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		// Don't use WithEventFilter here as it also filters events for Owned objects.
		For(&apiv1.Gateway{}, builder.WithPredicates(predicate.NewPredicateFuncs(func(object client.Object) bool {
			if gw, ok := object.(*apiv1.Gateway); ok {
				return gw.Spec.GatewayClassName == c.cfg.GWClass
			}
			return false
		}), predicate.GenerationChangedPredicate{}))

	// watch for changes in GatewayParameters
	cli := c.cfg.Mgr.GetClient()
	buildr.Watches(&v1alpha1.GatewayParameters{}, handler.EnqueueRequestsFromMapFunc(
		func(ctx context.Context, obj client.Object) []reconcile.Request {
			gwpName := obj.GetName()
			gwpNamespace := obj.GetNamespace()
			// look up the Gateways that are using this GatewayParameters object
			var gwList apiv1.GatewayList
			err := cli.List(ctx, &gwList, client.InNamespace(gwpNamespace), client.MatchingFieldsSelector{Selector: fields.OneTermEqualSelector(GatewayParamsField, gwpName)})
			if err != nil {
				log.Error(err, "could not list Gateways using GatewayParameters", "gwpNamespace", gwpNamespace, "gwpName", gwpName)
				return []reconcile.Request{}
			}
			// reconcile each Gateway that is using this GatewayParameters object
			var reqs []reconcile.Request
			for _, gw := range gwList.Items {
				reqs = append(reqs, reconcile.Request{NamespacedName: client.ObjectKey{Namespace: gw.Namespace, Name: gw.Name}})
			}
			return reqs
		}))

	for _, gvk := range gvks {
		obj, err := c.cfg.Mgr.GetScheme().New(gvk)
		if err != nil {
			return err
		}
		clientObj, ok := obj.(client.Object)
		if !ok {
			return fmt.Errorf("object %T is not a client.Object", obj)
		}
		log.Info("watching gvk as gateway child", "gvk", gvk)
		// unless its a service, we don't care about the status
		var opts []builder.OwnsOption
		if shouldIgnoreStatusChild(gvk) {
			opts = append(opts, builder.WithPredicates(predicate.GenerationChangedPredicate{}))
		}
		buildr.Owns(clientObj, opts...)
	}

	gwReconciler := &gatewayReconciler{
		cli:           c.cfg.Mgr.GetClient(),
		scheme:        c.cfg.Mgr.GetScheme(),
		className:     c.cfg.GWClass,
		autoProvision: c.cfg.AutoProvision,
		deployer:      d,
		kick:          c.cfg.Kick,
	}
	err = buildr.Complete(gwReconciler)
	if err != nil {
		return err
	}
	return nil
}

func shouldIgnoreStatusChild(gvk schema.GroupVersionKind) bool {
	// avoid triggering on pod changes that update deployment status
	return gvk.Kind == "Deployment"
}

func (c *controllerBuilder) watchGwClass(ctx context.Context) error {
	return ctrl.NewControllerManagedBy(c.cfg.Mgr).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		For(&apiv1.GatewayClass{}).
		Complete(reconcile.Func(c.reconciler.ReconcileGatewayClasses))
}

func (c *controllerBuilder) watchHttpRoute(ctx context.Context) error {
	err := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		For(&apiv1.HTTPRoute{}).
		Complete(reconcile.Func(c.reconciler.ReconcileHttpRoutes))
	if err != nil {
		return err
	}
	return nil
}

func (c *controllerBuilder) watchReferenceGrant(ctx context.Context) error {
	err := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		For(&apiv1beta1.ReferenceGrant{}).
		Complete(reconcile.Func(c.reconciler.ReconcileReferenceGrants))
	if err != nil {
		return err
	}
	return nil
}

func (c *controllerBuilder) watchNamespaces(ctx context.Context) error {
	err := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		For(&corev1.Namespace{}).
		Complete(reconcile.Func(c.reconciler.ReconcileNamespaces))
	if err != nil {
		return err
	}
	return nil
}

func (c *controllerBuilder) watchRouteOptions(ctx context.Context) error {
	err := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		For(&sologatewayv1.RouteOption{}).
		Complete(reconcile.Func(c.reconciler.ReconcileRouteOptions))
	if err != nil {
		return err
	}
	return nil
}

func (c *controllerBuilder) watchVirtualHostOptions(ctx context.Context) error {
	err := ctrl.NewControllerManagedBy(c.cfg.Mgr).
		WithEventFilter(predicate.GenerationChangedPredicate{}).
		For(&sologatewayv1.VirtualHostOption{}).
		Complete(reconcile.Func(c.reconciler.ReconcileVirtualHostOptions))
	if err != nil {
		return err
	}
	return nil
}

type controllerReconciler struct {
	cli    client.Client
	scheme *runtime.Scheme
	kick   func(ctx context.Context)
}

func (r *controllerReconciler) ReconcileRouteOptions(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	// eventually reconcile only effected routes/listeners etc
	r.kick(ctx)
	return ctrl.Result{}, nil
}

func (r *controllerReconciler) ReconcileVirtualHostOptions(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	// eventually reconcile only effected listeners etc
	r.kick(ctx)
	return ctrl.Result{}, nil
}

func (r *controllerReconciler) ReconcileNamespaces(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	// reconcile all gateways with namespace selector
	r.kick(ctx)
	return ctrl.Result{}, nil
}

func (r *controllerReconciler) ReconcileHttpRoutes(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	// find impacted gateways and queue them
	hr := apiv1.HTTPRoute{}
	err := r.cli.Get(ctx, req.NamespacedName, &hr)
	if err != nil {
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	// TODO: consider enabling this
	//	// reconcile this specific route:
	//	queries := query.NewData(r.cli, r.scheme)
	//	httproute.TranslateGatewayHTTPRouteRules(queries, hr, nil)

	r.kick(ctx)
	return ctrl.Result{}, nil
}

func (r *controllerReconciler) ReconcileReferenceGrants(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {

	// reconcile all things?!
	r.kick(ctx)
	return ctrl.Result{}, nil
}

func (r *controllerReconciler) ReconcileGatewayClasses(ctx context.Context, req ctrl.Request) (ctrl.Result, error) {
	log := log.FromContext(ctx).WithValues("gwclass", req.NamespacedName)

	// if a gateway
	gwclass := &apiv1.GatewayClass{}
	err := r.cli.Get(ctx, req.NamespacedName, gwclass)
	if err != nil {
		return ctrl.Result{}, client.IgnoreNotFound(err)
	}

	log.Info("reconciling gateway class")

	// mark it as accepted:
	acceptedCondition := metav1.Condition{
		Type:               string(apiv1.GatewayClassConditionStatusAccepted),
		Status:             metav1.ConditionTrue,
		Reason:             string(apiv1.GatewayClassReasonAccepted),
		ObservedGeneration: gwclass.Generation,
		// no need to set LastTransitionTime, it will be set automatically by SetStatusCondition
	}
	meta.SetStatusCondition(&gwclass.Status.Conditions, acceptedCondition)

	// TODO: This should actually check the version of the CRDs in the cluster to be 100% sure
	supportedVersionCondition := metav1.Condition{
		Type:               string(apiv1.GatewayClassConditionStatusSupportedVersion),
		Status:             metav1.ConditionTrue,
		ObservedGeneration: gwclass.Generation,
		Reason:             string(apiv1.GatewayClassReasonSupportedVersion),
	}
	meta.SetStatusCondition(&gwclass.Status.Conditions, supportedVersionCondition)

	err = r.cli.Status().Update(ctx, gwclass)
	if err != nil {
		return ctrl.Result{}, err
	}
	log.Info("updated gateway class status")

	return ctrl.Result{}, nil
}
