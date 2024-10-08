package extensions

import (
	"context"

	gatewayv1 "github.com/solo-io/gloo/projects/gateway/pkg/api/v1"
	"github.com/solo-io/gloo/projects/gateway2/krtextensions"
	"github.com/solo-io/gloo/projects/gateway2/query"
	"github.com/solo-io/gloo/projects/gateway2/serviceentry"
	"github.com/solo-io/gloo/projects/gateway2/translator"
	"github.com/solo-io/gloo/projects/gateway2/translator/plugins/registry"
	v1 "github.com/solo-io/gloo/projects/gloo/pkg/api/v1/enterprise/options/extauth/v1"
	"github.com/solo-io/solo-kit/pkg/api/v2/reporter"
	"istio.io/istio/pkg/kube"
	controllerruntime "sigs.k8s.io/controller-runtime"
	"sigs.k8s.io/controller-runtime/pkg/client"
	apiv1 "sigs.k8s.io/gateway-api/apis/v1"
)

// K8sGatewayExtensions is responsible for providing implementations for translation utilities
// which have Enterprise variants.
type K8sGatewayExtensions interface {
	// CreatePluginRegistry exposes the plugins supported by this implementation.
	CreatePluginRegistry(context.Context) registry.PluginRegistry

	// GetTranslator allows an extension to provide custom translation for
	// different gateway classes.
	GetTranslator(context.Context, *apiv1.Gateway, registry.PluginRegistry) translator.K8sGwTranslator

	// GetKRTExtensions allows injecting additional elements into core KRT
	// collections before generating an APISnapshot along with the Proxy.
	GetKRTExtensions(ctx context.Context, istioKubeClient kube.Client) krtextensions.KRTExtension
}

// K8sGatewayExtensionsFactoryParameters contains the parameters required to start Gloo K8s Gateway Extensions (including Translator Plugins)
type K8sGatewayExtensionsFactoryParameters struct {
	Mgr                     controllerruntime.Manager
	AuthConfigClient        v1.AuthConfigClient
	RouteOptionClient       gatewayv1.RouteOptionClient
	VirtualHostOptionClient gatewayv1.VirtualHostOptionClient
	StatusReporter          reporter.StatusReporter
	KickXds                 func(ctx context.Context)
}

// K8sGatewayExtensionsFactory returns an extensions.K8sGatewayExtensions
type K8sGatewayExtensionsFactory func(
	ctx context.Context,
	params K8sGatewayExtensionsFactoryParameters,
) (K8sGatewayExtensions, error)

// NewK8sGatewayExtensions returns the Open Source implementation of K8sGatewayExtensions
func NewK8sGatewayExtensions(
	ctx context.Context,
	params K8sGatewayExtensionsFactoryParameters,
) (K8sGatewayExtensions, error) {
	if err := seSetup(ctx, params); err != nil {
		return nil, err
	}

	queries := query.NewData(
		params.Mgr.GetClient(),
		params.Mgr.GetScheme(),
		newSeBeRefResolver(params.Mgr.GetClient()),
	)

	return &k8sGatewayExtensions{
		mgr:                     params.Mgr,
		routeOptionClient:       params.RouteOptionClient,
		virtualHostOptionClient: params.VirtualHostOptionClient,
		statusReporter:          params.StatusReporter,
		queries:                 queries,
	}, nil
}

func seSetup(
	ctx context.Context,
	params K8sGatewayExtensionsFactoryParameters,
) error {
	// register se into scheme
	if err := addToScheme(params.Mgr.GetScheme()); err != nil {
		return err
	}
	// index fields
	if err := iterateIndices(func(obj client.Object, field string, indexer client.IndexerFunc) error {
		return params.Mgr.GetFieldIndexer().IndexField(ctx, obj, field, indexer)
	}); err != nil {
		return err
	}
	// kick xds on SE changes
	if err := watchDependencies(ctx, params.Mgr, params.KickXds); err != nil {
		return err
	}
	return nil
}

type k8sGatewayExtensions struct {
	mgr                     controllerruntime.Manager
	routeOptionClient       gatewayv1.RouteOptionClient
	virtualHostOptionClient gatewayv1.VirtualHostOptionClient
	statusReporter          reporter.StatusReporter
	translator              translator.K8sGwTranslator
	pluginRegistry          registry.PluginRegistry
	queries                 query.GatewayQueries
}

func (e *k8sGatewayExtensions) GetTranslator(_ context.Context, _ *apiv1.Gateway, pluginRegistry registry.PluginRegistry) translator.K8sGwTranslator {
	return translator.NewTranslator(e.queries, pluginRegistry)
}

func (e *k8sGatewayExtensions) GetKRTExtensions(ctx context.Context, istioKubeClient kube.Client) krtextensions.KRTExtension {
	return krtextensions.Aggregate{
		serviceentry.New(ctx, istioKubeClient),
	}
}

func (e *k8sGatewayExtensions) CreatePluginRegistry(_ context.Context) registry.PluginRegistry {
	plugins := registry.BuildPlugins(
		e.queries,
		e.mgr.GetClient(),
		e.routeOptionClient,
		e.virtualHostOptionClient,
		e.statusReporter,
	)
	return registry.NewPluginRegistry(plugins)
}
