package configproto_test

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestExtauthConfig(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Extauth Config Suite")
}
