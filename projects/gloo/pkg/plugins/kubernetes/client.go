package kubernetes

import (
	"context"
	"sync"
	"time"

	"github.com/solo-io/kubecontroller"
	kubeinformers "k8s.io/client-go/informers"
	kubelisters "k8s.io/client-go/listers/core/v1"

	"k8s.io/client-go/kubernetes"
)

type KubePluginListers struct {
	endpointsLister kubelisters.EndpointsLister
	servicesLister  kubelisters.ServiceLister
	podsLister      kubelisters.PodLister

	cacheUpdatedWatchers      []chan struct{}
	cacheUpdatedWatchersMutex sync.Mutex
}

var kubePlugin *KubePluginListers
var kubePluginOnce sync.Once

// TODO(yuval-k): MUST MAKE SURE THAT THIS CLIENT DOESNT HAVE A CONTEXT THAT IS GOING TO EXPIRE!!
func startInformerFactoryOnce(client kubernetes.Interface) {
	kubePluginOnce.Do(func() {
		kubePlugin = startInformerFactory(context.TODO(), client)
	})
}

func startInformerFactory(ctx context.Context, client kubernetes.Interface) *KubePluginListers {
	resyncDuration := 12 * time.Hour
	kubeInformerFactory := kubeinformers.NewSharedInformerFactory(client, resyncDuration)

	endpointInformer := kubeInformerFactory.Core().V1().Endpoints()
	podsInformer := kubeInformerFactory.Core().V1().Pods()
	servicesInformer := kubeInformerFactory.Core().V1().Services()

	k := &KubePluginListers{
		endpointsLister: endpointInformer.Lister(),
		servicesLister:  servicesInformer.Lister(),
		podsLister:      podsInformer.Lister(),
	}

	kubeController := kubecontroller.NewController("kube-plugin-controller", client,
		kubecontroller.NewLockingSyncHandler(k.updatedOccured),
		endpointInformer.Informer(), podsInformer.Informer(), servicesInformer.Informer())

	stop := ctx.Done()
	go kubeInformerFactory.Start(stop)
	go kubeController.Run(2, stop)
	return k
}

func (k *KubePluginListers) subscribe() chan struct{} {

	k.cacheUpdatedWatchersMutex.Lock()
	defer k.cacheUpdatedWatchersMutex.Unlock()
	c := make(chan struct{}, 1)
	k.cacheUpdatedWatchers = append(k.cacheUpdatedWatchers, c)
	return c
}

func (k *KubePluginListers) unsubscribe(c chan struct{}) {

	k.cacheUpdatedWatchersMutex.Lock()
	defer k.cacheUpdatedWatchersMutex.Unlock()
	for i, cacheUpdated := range k.cacheUpdatedWatchers {
		if cacheUpdated == c {
			k.cacheUpdatedWatchers = append(k.cacheUpdatedWatchers[:i], k.cacheUpdatedWatchers[i+1:]...)
			return
		}
	}
}

func (k *KubePluginListers) updatedOccured() {
	k.cacheUpdatedWatchersMutex.Lock()
	defer k.cacheUpdatedWatchersMutex.Unlock()
	for _, cacheUpdated := range k.cacheUpdatedWatchers {
		select {
		case cacheUpdated <- struct{}{}:
		default:
		}
	}
}
