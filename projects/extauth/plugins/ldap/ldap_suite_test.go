package main_test

import (
	"testing"

	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
)

func TestLdap(t *testing.T) {
	RegisterFailHandler(Fail)
	RunSpecs(t, "Ldap Loader Suite")
}
