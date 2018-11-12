// Code generated by protoc-gen-solo-kit. DO NOT EDIT.

package v1

import (
	"context"
	"os"
	"path/filepath"
	"time"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/clients/factory"
	kuberc "github.com/solo-io/solo-kit/pkg/api/v1/clients/kube"
	"github.com/solo-io/solo-kit/pkg/utils/log"
	"github.com/solo-io/solo-kit/test/helpers"
	"github.com/solo-io/solo-projects/test/services"
	"k8s.io/client-go/rest"
	"k8s.io/client-go/tools/clientcmd"
)

var _ = Describe("V1Emitter", func() {
	if os.Getenv("RUN_KUBE_TESTS") != "1" {
		log.Printf("This test creates kubernetes resources and is disabled by default. To enable, set RUN_KUBE_TESTS=1 in your env.")
		return
	}
	var (
		namespace1      string
		namespace2      string
		cfg             *rest.Config
		emitter         ApiEmitter
		changeSetClient ChangeSetClient
	)

	BeforeEach(func() {
		namespace1 = helpers.RandString(8)
		namespace2 = helpers.RandString(8)
		err := services.SetupKubeForTest(namespace1)
		Expect(err).NotTo(HaveOccurred())
		err = services.SetupKubeForTest(namespace2)
		kubeconfigPath := filepath.Join(os.Getenv("HOME"), ".kube", "config")
		cfg, err = clientcmd.BuildConfigFromFlags("", kubeconfigPath)
		Expect(err).NotTo(HaveOccurred())

		cache := kuberc.NewKubeCache()

		// ChangeSet Constructor
		changeSetClientFactory := &factory.KubeResourceClientFactory{
			Crd:         ChangeSetCrd,
			Cfg:         cfg,
			SharedCache: cache,
		}
		changeSetClient, err = NewChangeSetClient(changeSetClientFactory)
		Expect(err).NotTo(HaveOccurred())
		emitter = NewApiEmitter(changeSetClient)
	})
	AfterEach(func() {
		services.TeardownKube(namespace1)
		services.TeardownKube(namespace2)
	})
	It("tracks snapshots on changes to any resource", func() {
		ctx := context.Background()
		err := emitter.Register()
		Expect(err).NotTo(HaveOccurred())

		snapshots, errs, err := emitter.Snapshots([]string{namespace1, namespace2}, clients.WatchOpts{
			Ctx:         ctx,
			RefreshRate: time.Second,
		})
		Expect(err).NotTo(HaveOccurred())

		var snap *ApiSnapshot

		/*
			ChangeSet
		*/

		assertSnapshotChangesets := func(expectChangesets ChangeSetList, unexpectChangesets ChangeSetList) {
		drain:
			for {
				select {
				case snap = <-snapshots:
					for _, expected := range expectChangesets {
						if _, err := snap.Changesets.List().Find(expected.Metadata.Ref().Strings()); err != nil {
							continue drain
						}
					}
					for _, unexpected := range unexpectChangesets {
						if _, err := snap.Changesets.List().Find(unexpected.Metadata.Ref().Strings()); err == nil {
							continue drain
						}
					}
					break drain
				case err := <-errs:
					Expect(err).NotTo(HaveOccurred())
				case <-time.After(time.Second * 10):
					nsList1, _ := changeSetClient.List(namespace1, clients.ListOpts{})
					nsList2, _ := changeSetClient.List(namespace2, clients.ListOpts{})
					combined := nsList1.ByNamespace()
					combined.Add(nsList2...)
					Fail("expected final snapshot before 10 seconds. expected " + log.Sprintf("%v", combined))
				}
			}
		}

		changeSet1a, err := changeSetClient.Write(NewChangeSet(namespace1, "angela"), clients.WriteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())
		changeSet1b, err := changeSetClient.Write(NewChangeSet(namespace2, "angela"), clients.WriteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())

		assertSnapshotChangesets(ChangeSetList{changeSet1a, changeSet1b}, nil)

		changeSet2a, err := changeSetClient.Write(NewChangeSet(namespace1, "bob"), clients.WriteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())
		changeSet2b, err := changeSetClient.Write(NewChangeSet(namespace2, "bob"), clients.WriteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())

		assertSnapshotChangesets(ChangeSetList{changeSet1a, changeSet1b, changeSet2a, changeSet2b}, nil)

		err = changeSetClient.Delete(changeSet2a.Metadata.Namespace, changeSet2a.Metadata.Name, clients.DeleteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())
		err = changeSetClient.Delete(changeSet2b.Metadata.Namespace, changeSet2b.Metadata.Name, clients.DeleteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())

		assertSnapshotChangesets(ChangeSetList{changeSet1a, changeSet1b}, ChangeSetList{changeSet2a, changeSet2b})

		err = changeSetClient.Delete(changeSet1a.Metadata.Namespace, changeSet1a.Metadata.Name, clients.DeleteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())
		err = changeSetClient.Delete(changeSet1b.Metadata.Namespace, changeSet1b.Metadata.Name, clients.DeleteOpts{Ctx: ctx})
		Expect(err).NotTo(HaveOccurred())

		assertSnapshotChangesets(nil, ChangeSetList{changeSet1a, changeSet1b, changeSet2a, changeSet2b})
	})
})
