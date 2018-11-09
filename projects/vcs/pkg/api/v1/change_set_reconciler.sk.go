// Code generated by protoc-gen-solo-kit. DO NOT EDIT.

package v1

import (
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/reconcile"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/utils/contextutils"
)

// Option to copy anything from the original to the desired before writing. Return value of false means don't update
type TransitionChangeSetFunc func(original, desired *ChangeSet) (bool, error)

type ChangeSetReconciler interface {
	Reconcile(namespace string, desiredResources ChangeSetList, transition TransitionChangeSetFunc, opts clients.ListOpts) error
}

func changeSetsToResources(list ChangeSetList) resources.ResourceList {
	var resourceList resources.ResourceList
	for _, changeSet := range list {
		resourceList = append(resourceList, changeSet)
	}
	return resourceList
}

func NewChangeSetReconciler(client ChangeSetClient) ChangeSetReconciler {
	return &changeSetReconciler{
		base: reconcile.NewReconciler(client.BaseClient()),
	}
}

type changeSetReconciler struct {
	base reconcile.Reconciler
}

func (r *changeSetReconciler) Reconcile(namespace string, desiredResources ChangeSetList, transition TransitionChangeSetFunc, opts clients.ListOpts) error {
	opts = opts.WithDefaults()
	opts.Ctx = contextutils.WithLogger(opts.Ctx, "changeSet_reconciler")
	var transitionResources reconcile.TransitionResourcesFunc
	if transition != nil {
		transitionResources = func(original, desired resources.Resource) (bool, error) {
			return transition(original.(*ChangeSet), desired.(*ChangeSet))
		}
	}
	return r.base.Reconcile(namespace, changeSetsToResources(desiredResources), transitionResources, opts)
}
