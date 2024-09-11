// istiodep_test simply ensures that we can import the istio
// library as a dep in gloo without causing build failures
package istiodep_test

import (
	"testing"

	_ "istio.io/istio/pkg/kube/kclient"
)

func TestMain(m *testing.M) {
	// noop
}
