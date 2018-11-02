package v1
import (
	"github.com/solo-io/solo-kit/pkg/api/v1/clients"
	"github.com/solo-io/solo-kit/pkg/api/v1/reconcile"
	"github.com/solo-io/solo-kit/pkg/api/v1/resources"
	"github.com/solo-io/solo-kit/pkg/utils/contextutils"
)

// Option to copy anything from the original to the desired before writing. Return value of false means don't update
type TransitionArtifactFunc func(original, desired *Artifact) (bool, error)

type ArtifactReconciler interface {
	Reconcile(namespace string, desiredResources ArtifactList, transition TransitionArtifactFunc, opts clients.ListOpts) error
}

func artifactsToResources(list ArtifactList) resources.ResourceList {
	var resourceList resources.ResourceList
	for _, artifact := range list {
		resourceList = append(resourceList, artifact)
	}
	return resourceList
}

func NewArtifactReconciler(client ArtifactClient) ArtifactReconciler {
	return &artifactReconciler{
		base: reconcile.NewReconciler(client.BaseClient()),
	}
}

type artifactReconciler struct {
	base reconcile.Reconciler
}

func (r *artifactReconciler) Reconcile(namespace string, desiredResources ArtifactList, transition TransitionArtifactFunc, opts clients.ListOpts) error {
	opts = opts.WithDefaults()
	opts.Ctx = contextutils.WithLogger(opts.Ctx, "artifact_reconciler")
	var transitionResources reconcile.TransitionResourcesFunc
	if transition != nil {
		transitionResources = func(original, desired resources.Resource) (bool, error) {
			return transition(original.(*Artifact), desired.(*Artifact))
		}
	}
	return r.base.Reconcile(namespace, artifactsToResources(desiredResources), transitionResources, opts)
}
