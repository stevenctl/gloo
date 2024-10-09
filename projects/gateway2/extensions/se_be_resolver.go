package extensions

import (
	"context"
	"errors"

	"github.com/rotisserie/eris"
	"github.com/solo-io/gloo/projects/gateway2/query"
	networkingclient "istio.io/client-go/pkg/apis/networking/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/apimachinery/pkg/fields"
	"k8s.io/apimachinery/pkg/runtime"
	ctrl "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/manager"
	"sigs.k8s.io/controller-runtime/pkg/predicate"
	"sigs.k8s.io/controller-runtime/pkg/reconcile"
	gwv1 "sigs.k8s.io/gateway-api/apis/v1"
)

var _ query.BackendRefResolver = &seBeRefResolver{}

type seBeRefResolver struct {
	client client.Client
}

func newSeBeRefResolver(
	client client.Client,
) *seBeRefResolver {
	// TODO scheme registration in solo-projects happens elsewhere
	return &seBeRefResolver{
		client: client,
	}
}

// GetRef handles referencing ServiceEntry by Hostname.
// We don't need a custom resolver for direct references.
func (s *seBeRefResolver) GetRef(
	ctx context.Context,
	from query.From,
	backendName string,
	backendNS *gwv1.Namespace,
	backendGK metav1.GroupKind,
) (client.Object, error, bool) {
	groupOk := backendGK.Group == "" || backendGK.Group == networkingclient.SchemeGroupVersion.Group
	kindOk := backendGK.Kind == "Hostname"
	if !groupOk || !kindOk {
		// we're not responsible for this
		return nil, nil, false
	}

	var seList networkingclient.ServiceEntryList
	s.client.List(ctx, &seList, &client.ListOptions{
		FieldSelector: fields.AndSelectors(
			fields.OneTermEqualSelector(SEHostnameField, backendName),
		),
		Namespace: from.Namespace(),
	})
	var out *networkingclient.ServiceEntry
	for _, se := range seList.Items {
		if !seVisibleFrom(from.Namespace(), se) {
			continue
		}

		// prioritize the oldest visible ServiceEntry
		if out == nil || se.CreationTimestamp.Time.Before(out.CreationTimestamp.Time) {
			out = se
		}
	}
	if out == nil {
		return nil, eris.New("No service entry with matching hostname"), true
	}
	return out, nil, true
}

func seVisibleFrom(fromNs string, se *networkingclient.ServiceEntry) bool {
	// no exportTo means it is global
	// same namespace is always visible
	if len(se.Spec.ExportTo) == 0 || se.Namespace == fromNs {
		return true
	}

	// otherwise find something that exports to from's ns
	visible := false
	for _, exportTo := range se.Spec.ExportTo {
		if exportTo == fromNs || exportTo == "*" {
			visible = true
			break
		}
	}
	return visible
}

// everything below will live in waypointquery/indexers.go

const (
	SEHostnameField = "serviceEntry.hostnames"
)

// copied from solo-projects

var watchedTypes = []client.Object{
	&networkingclient.ServiceEntry{},
}

func watchDependencies(
	ctx context.Context,
	mgr manager.Manager,
	kick func(context.Context),
) error {
	reconcileKick := func(ctx context.Context, _ ctrl.Request) (ctrl.Result, error) {
		kick(ctx)
		return ctrl.Result{}, nil
	}
	for _, watchedType := range watchedTypes {
		err := ctrl.NewControllerManagedBy(mgr).
			WithEventFilter(predicate.GenerationChangedPredicate{}).
			For(watchedType).
			Complete(reconcile.Func(reconcileKick))
		if err != nil {
			return err
		}
	}
	return nil
}

func iterateIndices(f func(client.Object, string, client.IndexerFunc) error) error {
	return errors.Join(
		f(&networkingclient.ServiceEntry{}, SEHostnameField, seHostnameIndexer),
	)
}

func seHostnameIndexer(obj client.Object) []string {
	se, ok := obj.(*networkingclient.ServiceEntry)
	if !ok {
		return nil
	}
	return se.Spec.GetHosts()
}

func addToScheme(scheme *runtime.Scheme) error {
	return networkingclient.AddToScheme(scheme)
}
