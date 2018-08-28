package setup

import (
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/memory"
	"github.com/solo-io/solo-kit/pkg/api/v1/reporter"
	"github.com/solo-io/solo-kit/pkg/utils/contextutils"
	"github.com/solo-io/solo-kit/pkg/utils/errutils"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/api/v1"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/discovery"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/syncer"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/translator"
	"github.com/solo-io/solo-kit/projects/gloo/pkg/xds"
	"google.golang.org/grpc"
)

type Opts struct {
	namespace       string
	configBackend   factory.ResourceClientFactoryOpts
	secretBackend   factory.ResourceClientFactoryOpts
	artifactBackend factory.ResourceClientFactoryOpts
	grpcServer      *grpc.Server
	watchOpts       clients.WatchOpts
}

func Setup(opts Opts) error {
	watchOpts := opts.watchOpts.WithDefaults()
	inputResourceOpts := opts.configBackend
	secretOpts := opts.secretBackend
	artifactOpts := opts.artifactBackend
	namespace := opts.namespace

	watchOpts.Ctx = contextutils.WithLogger(watchOpts.Ctx, "setup")
	inputFactory := factory.NewResourceClientFactory(inputResourceOpts)
	secretFactory := factory.NewResourceClientFactory(secretOpts)
	artifactFactory := factory.NewResourceClientFactory(artifactOpts)
	// endpoints are internal-only, therefore use the in-memory client
	endpointsFactory := factory.NewResourceClientFactory(&factory.MemoryResourceClientOpts{
		Cache: memory.NewInMemoryResourceCache(),
	})

	upstreamClient, err := v1.NewUpstreamClient(inputFactory)
	if err != nil {
		return err
	}

	proxyClient, err := v1.NewProxyClient(inputFactory)
	if err != nil {
		return err
	}

	endpointClient, err := v1.NewEndpointClient(endpointsFactory)
	if err != nil {
		return err
	}

	secretClient, err := v1.NewSecretClient(secretFactory)
	if err != nil {
		return err
	}

	artifactClient, err := v1.NewArtifactClient(artifactFactory)
	if err != nil {
		return err
	}

	cache := v1.NewCache(artifactClient, endpointClient, proxyClient, secretClient, upstreamClient)

	disc := discovery.NewDiscovery(namespace, upstreamClient, endpointClient)

	xdsHasher, xdsCache := xds.SetupEnvoyXds(opts.watchOpts.Ctx, opts.grpcServer, nil)

	rpt := reporter.NewReporter("gloo", upstreamClient.BaseClient(), proxyClient.BaseClient())

	sync := syncer.NewSyncer(namespace, translator.NewTranslator(), xdsCache, xdsHasher, rpt)

	eventLoop := v1.NewEventLoop(cache, sync)

	errs := make(chan error)

	udsErrs, err := discovery.RunUds(disc, watchOpts, discovery.Opts{
	// TODO(ilackarms)
	})
	if err != nil {
		return err
	}
	go errutils.AggregateErrs(watchOpts.Ctx, errs, udsErrs, "uds.gloo")

	edsErrs, err := discovery.RunEds(upstreamClient, disc, namespace, watchOpts)
	if err != nil {
		return err
	}
	go errutils.AggregateErrs(watchOpts.Ctx, errs, edsErrs, "eds.gloo")

	eventLoopErrs, err := eventLoop.Run(namespace, watchOpts)
	if err != nil {
		return err
	}
	go errutils.AggregateErrs(watchOpts.Ctx, errs, eventLoopErrs, "event_loop.gloo")

	logger := contextutils.LoggerFrom(watchOpts.Ctx)

	for {
		select {
		case err := <-errs:
			logger.Errorf("error: %v", err)
		case <-watchOpts.Ctx.Done():
			close(errs)
			return nil
		}
	}
}
