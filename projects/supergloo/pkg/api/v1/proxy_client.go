package v1

import (
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/errors"
)

type ProxyClient interface {
	BaseClient() clients.ResourceClient
	Register() error
	Read(namespace, name string, opts clients.ReadOpts) (*Proxy, error)
	Write(resource *Proxy, opts clients.WriteOpts) (*Proxy, error)
	Delete(namespace, name string, opts clients.DeleteOpts) error
	List(namespace string, opts clients.ListOpts) (ProxyList, error)
	Watch(namespace string, opts clients.WatchOpts) (<-chan ProxyList, <-chan error, error)
}

type proxyClient struct {
	rc clients.ResourceClient
}

func NewProxyClient(rcFactory factory.ResourceClientFactory) (ProxyClient, error) {
	return NewProxyClientWithToken(rcFactory, "")
}

func NewProxyClientWithToken(rcFactory factory.ResourceClientFactory, token string) (ProxyClient, error) {
	rc, err := rcFactory.NewResourceClient(factory.NewResourceClientParams{
		ResourceType: &Proxy{},
		Token: token,
	})
	if err != nil {
		return nil, errors.Wrapf(err, "creating base Proxy resource client")
	}
	return &proxyClient{
		rc: rc,
	}, nil
}

func (client *proxyClient) BaseClient() clients.ResourceClient {
	return client.rc
}

func (client *proxyClient) Register() error {
	return client.rc.Register()
}

func (client *proxyClient) Read(namespace, name string, opts clients.ReadOpts) (*Proxy, error) {
	opts = opts.WithDefaults()
	resource, err := client.rc.Read(namespace, name, opts)
	if err != nil {
		return nil, err
	}
	return resource.(*Proxy), nil
}

func (client *proxyClient) Write(proxy *Proxy, opts clients.WriteOpts) (*Proxy, error) {
	opts = opts.WithDefaults()
	resource, err := client.rc.Write(proxy, opts)
	if err != nil {
		return nil, err
	}
	return resource.(*Proxy), nil
}

func (client *proxyClient) Delete(namespace, name string, opts clients.DeleteOpts) error {
	opts = opts.WithDefaults()
	return client.rc.Delete(namespace, name, opts)
}

func (client *proxyClient) List(namespace string, opts clients.ListOpts) (ProxyList, error) {
	opts = opts.WithDefaults()
	resourceList, err := client.rc.List(namespace, opts)
	if err != nil {
		return nil, err
	}
	return convertToProxy(resourceList), nil
}

func (client *proxyClient) Watch(namespace string, opts clients.WatchOpts) (<-chan ProxyList, <-chan error, error) {
	opts = opts.WithDefaults()
	resourcesChan, errs, initErr := client.rc.Watch(namespace, opts)
	if initErr != nil {
		return nil, nil, initErr
	}
	proxiesChan := make(chan ProxyList)
	go func() {
		for {
			select {
			case resourceList := <-resourcesChan:
				proxiesChan <- convertToProxy(resourceList)
			case <-opts.Ctx.Done():
				close(proxiesChan)
				return
			}
		}
	}()
	return proxiesChan, errs, nil
}

func convertToProxy(resources resources.ResourceList) ProxyList {
	var proxyList ProxyList
	for _, resource := range resources {
		proxyList = append(proxyList, resource.(*Proxy))
	}
	return proxyList
}

