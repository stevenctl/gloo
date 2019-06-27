#----------------------------------------------------------------------------------
# Base
#----------------------------------------------------------------------------------

ROOTDIR := $(shell pwd)
PACKAGE_PATH:=github.com/solo-io/solo-projects
OUTPUT_DIR ?= $(ROOTDIR)/_output
# Kind of a hack to make sure _output exists
z := $(shell mkdir -p $(OUTPUT_DIR))
SOURCES := $(shell find . -name "*.go" | grep -v test.go | grep -v '\.\#*')
RELEASE := "true"
ifeq ($(TAGGED_VERSION),)
	# TAGGED_VERSION := $(shell git describe --tags)
	# This doesn't work in CI, need to find another way...
	TAGGED_VERSION := vdev
	RELEASE := "false"
endif
VERSION ?= $(shell echo $(TAGGED_VERSION) | cut -c 2-)
LDFLAGS := "-X github.com/solo-io/solo-projects/pkg/version.Version=$(VERSION)"
GCFLAGS := all="-N -l"

# Passed by cloudbuild
GCLOUD_PROJECT_ID := $(GCLOUD_PROJECT_ID)
BUILD_ID := $(BUILD_ID)

TEST_IMAGE_TAG := test-$(BUILD_ID)
TEST_ASSET_DIR := $(ROOTDIR)/_test
GCR_REPO_PREFIX := gcr.io/$(GCLOUD_PROJECT_ID)


#----------------------------------------------------------------------------------
# Marcos
#----------------------------------------------------------------------------------

# If both GCLOUD_PROJECT_ID and BUILD_ID are set, define a function that takes a docker image name
# and returns a '-t' flag that can be passed to 'docker build' to create a tag for a test image.
# If the function is not defined, any attempt at calling if will return nothing (it does not cause en error)
ifneq ($(GCLOUD_PROJECT_ID),)
ifneq ($(BUILD_ID),)
define get_test_tag_option
	-t $(GCR_REPO_PREFIX)/$(1):$(TEST_IMAGE_TAG)
endef
endif
endif

# Same as above, but returns only the tag name withouth the '-t' prefix
ifneq ($(GCLOUD_PROJECT_ID),)
ifneq ($(BUILD_ID),)
define get_test_tag
	$(GCR_REPO_PREFIX)/$(1):$(TEST_IMAGE_TAG)
endef
endif
endif

#----------------------------------------------------------------------------------
# Repo setup
#----------------------------------------------------------------------------------

# https://www.viget.com/articles/two-ways-to-share-git-hooks-with-your-team/
.PHONY: init
init:
	git config core.hooksPath .githooks

.PHONY: update-deps
update-deps:
	go get -u golang.org/x/tools/cmd/goimports
	go get -u github.com/gogo/protobuf/gogoproto
	go get -u github.com/gogo/protobuf/protoc-gen-gogo
	mkdir -p $$GOPATH/src/github.com/envoyproxy
	# use a specific commit (c15f2c24fb27b136e722fa912accddd0c8db9dfa) until v0.0.15 is released, as in v0.0.14 the import paths were not yet changed
	cd $$GOPATH/src/github.com/envoyproxy && if [ ! -e protoc-gen-validate ];then git clone https://github.com/envoyproxy/protoc-gen-validate; fi && cd protoc-gen-validate && git fetch && git checkout c15f2c24fb27b136e722fa912accddd0c8db9dfa
	go get -u github.com/paulvollmer/2gobytes
	go get -v -u github.com/golang/mock/gomock
	go install github.com/golang/mock/mockgen
.PHONY: pin-repos
pin-repos:
	go run pin_repos.go

.PHONY: check-format
check-format:
	NOT_FORMATTED=$$(gofmt -l ./projects/ ./pkg/ ./test/ ./install/) && if [ -n "$$NOT_FORMATTED" ]; then echo These files are not formatted: $$NOT_FORMATTED; exit 1; fi


#----------------------------------------------------------------------------------
# Build Scripts
#----------------------------------------------------------------------------------

BUILD_SCRIPTS := install/distribution

.PHONY: build-scripts
build-scripts: $(BUILD_SCRIPTS)

.PHONY: install/distribution
install/distribution:
	go build -o /dev/null $(ROOTDIR)/$@

#----------------------------------------------------------------------------------
# Clean
#----------------------------------------------------------------------------------

# Important to clean before pushing new releases. Dockerfiles and binaries may not update properly
.PHONY: clean
clean:
	rm -rf _output
	git clean -xdf install

#----------------------------------------------------------------------------------
# Generated Code
#----------------------------------------------------------------------------------



SUBDIRS:=projects install pkg test
.PHONY: generated-code
generated-code:
	CGO_ENABLED=0 go generate ./...
	(rm projects/gloo/doc/docs/cli/*;mkdir -p projects/gloo/doc/docs/cli/; cd projects/gloo/doc && CGO_ENABLED=0 go run gen_docs.go)
	gofmt -w $(SUBDIRS)
	goimports -w $(SUBDIRS)
	mkdir -p $(OUTPUT_DIR)
	touch $@

UI_PROTOC_FLAGS=--plugin=protoc-gen-ts=projects/gloo-ui/node_modules/.bin/protoc-gen-ts \
		-I$(GOPATH)/src \
		-I$(GOPATH)/src/github.com/solo-io/solo-kit/api/external \
		-I$(GOPATH)/src/github.com/solo-io/gloo/projects/gloo/api/v1 \
		-I$(GOPATH)/src/github.com/solo-io/gloo/projects/gateway/api/v1 \
		-I$(GOPATH)/src/github.com/solo-io/solo-projects/projects/gloo/api/v1 \
		--js_out=import_style=commonjs,binary:projects/gloo-ui/src/proto \
		--ts_out=service=true:projects/gloo-ui/src/proto

.PHONY: generated-ui
generated-ui:
	mkdir -p projects/gloo-ui/src/proto
	ci/check-protoc.sh
	protoc $(UI_PROTOC_FLAGS) \
		$(GOPATH)/src/github.com/gogo/protobuf/gogoproto/gogo.proto
	protoc $(UI_PROTOC_FLAGS) \
	 	$(GOPATH)/src/github.com/solo-io/solo-kit/api/v1/*.proto
	protoc $(UI_PROTOC_FLAGS) \
		$(GOPATH)/src/github.com/solo-io/gloo/projects/gloo/api/v1/*.proto
	protoc $(UI_PROTOC_FLAGS) \
		$(GOPATH)/src/github.com/solo-io/gloo/projects/gateway/api/v1/*.proto
	protoc $(UI_PROTOC_FLAGS) \
		$(GOPATH)/src/github.com/solo-io/solo-projects/projects/gloo/api/v1/*.proto
	protoc $(UI_PROTOC_FLAGS) \
    	$(GOPATH)/src/github.com/solo-io/solo-projects/projects/gloo/api/v1/plugins/*/*.proto
	protoc $(UI_PROTOC_FLAGS) \
		$(GOPATH)/src/github.com/solo-io/solo-projects/projects/grpcserver/api/v1/*.proto
	ci/fix-gen.sh
	gofmt -w $(SUBDIRS)
	goimports -w $(SUBDIRS)

#################
#     Build     #
#################

#----------------------------------------------------------------------------------
# allprojects
#----------------------------------------------------------------------------------
# helper for testing
.PHONY: allprojects
allprojects: apiserver gloo glooctl extauth rate-limit observability

#----------------------------------------------------------------------------------
# glooctl
#----------------------------------------------------------------------------------

CLI_DIR=projects/gloo/cli

$(OUTPUT_DIR)/glooctl: $(SOURCES)
	go build -ldflags=$(LDFLAGS) -o $@ $(CLI_DIR)/cmd/main.go


$(OUTPUT_DIR)/glooctl-linux-amd64: $(SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -o $@ $(CLI_DIR)/cmd/main.go


$(OUTPUT_DIR)/glooctl-darwin-amd64: $(SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=darwin go build -ldflags=$(LDFLAGS) -o $@ $(CLI_DIR)/cmd/main.go


$(OUTPUT_DIR)/glooctl-windows-amd64.exe: $(SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=windows go build -ldflags=$(LDFLAGS) -o $@ $(CLI_DIR)/cmd/main.go

.PHONY: glooctl
glooctl: $(OUTPUT_DIR)/glooctl
.PHONY: glooctl-linux-amd64
glooctl-linux-amd64: $(OUTPUT_DIR)/glooctl-linux-amd64
.PHONY: glooctl-darwin-amd64
glooctl-darwin-amd64: $(OUTPUT_DIR)/glooctl-darwin-amd64
.PHONY: glooctl-windows-amd64
glooctl-windows-amd64: $(OUTPUT_DIR)/glooctl-windows-amd64.exe

.PHONY: build-cli
build-cli: glooctl-linux-amd64 glooctl-darwin-amd64 glooctl-windows-amd64

#----------------------------------------------------------------------------------
# Apiserver
#----------------------------------------------------------------------------------
#
#---------
#--------- Graphql Stubs
#---------

APISERVER_DIR=projects/apiserver
APISERVER_GRAPHQL_DIR=$(APISERVER_DIR)/pkg/graphql
APISERVER_GRAPHQL_GENERATED_FILES=$(APISERVER_GRAPHQL_DIR)/models/generated.go $(APISERVER_GRAPHQL_DIR)/graph/generated.go
APISERVER_SOURCES=$(shell find $(APISERVER_GRAPHQL_DIR) -name "*.go" | grep -v test | grep -v generated.go)
APISERVER_GQL_SCHEMAS=$(shell find $(APISERVER_DIR)/gql_schemas -name "*.graphql")

.PHONY: apiserver-dependencies
apiserver-dependencies: $(APISERVER_GRAPHQL_GENERATED_FILES)
$(APISERVER_GRAPHQL_GENERATED_FILES): $(APISERVER_GQL_SCHEMAS) $(APISERVER_DIR)/gqlgen.yaml $(APISERVER_SOURCES)
	cd $(APISERVER_DIR) && \
	go run gqlgen.go -v

.PHONY: apiserver
apiserver: $(OUTPUT_DIR)/apiserver

# TODO(ilackarms): put these inside of a loop or function of some kind
$(OUTPUT_DIR)/apiserver: apiserver-dependencies $(SOURCES)
	CGO_ENABLED=0 go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ projects/apiserver/cmd/main.go

$(OUTPUT_DIR)/apiserver-linux-amd64: apiserver-dependencies $(SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ projects/apiserver/cmd/main.go

$(OUTPUT_DIR)/apiserver-darwin-amd64: apiserver-dependencies $(SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=darwin go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ projects/apiserver/cmd/main.go


$(OUTPUT_DIR)/Dockerfile.apiserver: $(APISERVER_DIR)/cmd/Dockerfile
	cp $< $@

.PHONY: apiserver-docker
apiserver-docker: $(OUTPUT_DIR)/.apiserver-docker

$(OUTPUT_DIR)/.apiserver-docker: $(OUTPUT_DIR)/apiserver-linux-amd64 $(OUTPUT_DIR)/Dockerfile.apiserver
	docker build -t quay.io/solo-io/apiserver-ee:$(VERSION) $(call get_test_tag_option,apiserver-ee) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.apiserver
	touch $@

.PHONY: run-apiserver
run-apiserver:
	GRPC_PORT=10101 POD_NAMESPACE=gloo-system go run projects/grpcserver/server/cmd/main.go

#----------------------------------------------------------------------------------
# RateLimit
#----------------------------------------------------------------------------------

RATELIMIT_DIR=projects/rate-limit
RATELIMIT_SOURCES=$(shell find $(RATELIMIT_DIR) -name "*.go" | grep -v test | grep -v generated.go)

$(OUTPUT_DIR)/rate-limit-linux-amd64: $(RATELIMIT_SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ $(RATELIMIT_DIR)/cmd/main.go

.PHONY: rate-limit
rate-limit: $(OUTPUT_DIR)/rate-limit-linux-amd64

$(OUTPUT_DIR)/Dockerfile.rate-limit: $(RATELIMIT_DIR)/cmd/Dockerfile
	cp $< $@

.PHONY: rate-limit-docker
rate-limit-docker: $(OUTPUT_DIR)/.rate-limit-docker

$(OUTPUT_DIR)/.rate-limit-docker: $(OUTPUT_DIR)/rate-limit-linux-amd64 $(OUTPUT_DIR)/Dockerfile.rate-limit
	docker build -t quay.io/solo-io/rate-limit-ee:$(VERSION) $(call get_test_tag_option,rate-limit-ee) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.rate-limit
	touch $@

#----------------------------------------------------------------------------------
# ExtAuth
#----------------------------------------------------------------------------------

EXTAUTH_DIR=projects/extauth
EXTAUTH_SOURCES=$(shell find $(EXTAUTH_DIR) -name "*.go" | grep -v test | grep -v generated.go)

$(OUTPUT_DIR)/extauth-linux-amd64: $(EXTAUTH_SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ $(EXTAUTH_DIR)/cmd/main.go

.PHONY: extauth
extauth: $(OUTPUT_DIR)/extauth-linux-amd64

$(OUTPUT_DIR)/Dockerfile.extauth: $(EXTAUTH_DIR)/cmd/Dockerfile
	cp $< $@

.PHONY: extauth-docker
extauth-docker: $(OUTPUT_DIR)/.extauth-docker

$(OUTPUT_DIR)/.extauth-docker: $(OUTPUT_DIR)/extauth-linux-amd64 $(OUTPUT_DIR)/Dockerfile.extauth
	docker build -t quay.io/solo-io/extauth-ee:$(VERSION) $(call get_test_tag_option,extauth-ee) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.extauth
	touch $@


#----------------------------------------------------------------------------------
# Observability
#----------------------------------------------------------------------------------

OBSERVABILITY_DIR=projects/observability
OBSERVABILITY_SOURCES=$(shell find $(OBSERVABILITY_DIR) -name "*.go" | grep -v test | grep -v generated.go)

$(OUTPUT_DIR)/observability-linux-amd64: $(OBSERVABILITY_SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ $(OBSERVABILITY_DIR)/cmd/main.go

.PHONY: observability
observability: $(OUTPUT_DIR)/observability-linux-amd64

$(OUTPUT_DIR)/Dockerfile.observability: $(OBSERVABILITY_DIR)/cmd/Dockerfile
	cp $< $@

.PHONY: observability-docker
observability-docker: $(OUTPUT_DIR)/.observability-docker

$(OUTPUT_DIR)/.observability-docker: $(OUTPUT_DIR)/observability-linux-amd64 $(OUTPUT_DIR)/Dockerfile.observability
	docker build -t quay.io/solo-io/observability-ee:$(VERSION) $(call get_test_tag_option,observability-ee) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.observability
	touch $@

#----------------------------------------------------------------------------------
# Gloo
#----------------------------------------------------------------------------------

GLOO_DIR=projects/gloo
GLOO_SOURCES=$(shell find $(GLOO_DIR) -name "*.go" | grep -v test | grep -v generated.go)

$(OUTPUT_DIR)/gloo-linux-amd64: $(GLOO_SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ $(GLOO_DIR)/cmd/main.go


.PHONY: gloo
gloo: $(OUTPUT_DIR)/gloo-linux-amd64

$(OUTPUT_DIR)/Dockerfile.gloo: $(GLOO_DIR)/cmd/Dockerfile
	cp $< $@


.PHONY: gloo-docker
gloo-docker: $(OUTPUT_DIR)/.gloo-docker

$(OUTPUT_DIR)/.gloo-docker: $(OUTPUT_DIR)/gloo-linux-amd64 $(OUTPUT_DIR)/Dockerfile.gloo
	docker build -t quay.io/solo-io/gloo-ee:$(VERSION) $(call get_test_tag_option,gloo-ee) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.gloo
	touch $@

gloo-docker-dev: $(OUTPUT_DIR)/gloo-linux-amd64 $(OUTPUT_DIR)/Dockerfile.gloo
	docker build -t quay.io/solo-io/gloo-ee:$(VERSION) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.gloo --no-cache
	touch $@

#----------------------------------------------------------------------------------
# Envoy init
#----------------------------------------------------------------------------------

ENVOYINIT_DIR=cmd/envoyinit
ENVOYINIT_SOURCES=$(shell find $(ENVOYINIT_DIR) -name "*.go" | grep -v test | grep -v generated.go)

$(OUTPUT_DIR)/envoyinit-linux-amd64: $(ENVOYINIT_SOURCES)
	CGO_ENABLED=0 GOARCH=amd64 GOOS=linux go build -ldflags=$(LDFLAGS) -gcflags=$(GCFLAGS) -o $@ $(ENVOYINIT_DIR)/main.go

.PHONY: envoyinit
envoyinit: $(OUTPUT_DIR)/envoyinit-linux-amd64


$(OUTPUT_DIR)/Dockerfile.envoyinit: $(ENVOYINIT_DIR)/Dockerfile
	cp $< $@

.PHONY: gloo-ee-envoy-wrapper-docker
gloo-ee-envoy-wrapper-docker: $(OUTPUT_DIR)/.gloo-ee-envoy-wrapper-docker

$(OUTPUT_DIR)/.gloo-ee-envoy-wrapper-docker: $(OUTPUT_DIR)/envoyinit-linux-amd64 $(OUTPUT_DIR)/Dockerfile.envoyinit
	docker build -t quay.io/solo-io/gloo-ee-envoy-wrapper:$(VERSION) $(call get_test_tag_option,gloo-ee-envoy-wrapper) $(OUTPUT_DIR) -f $(OUTPUT_DIR)/Dockerfile.envoyinit
	touch $@


#----------------------------------------------------------------------------------
# Deployment Manifests / Helm
#----------------------------------------------------------------------------------


HELM_SYNC_DIR := $(OUTPUT_DIR)/helm
HELM_DIR := install/helm
MANIFEST_DIR := install/manifest

.PHONY: manifest
manifest: helm-template init-helm install/manifest/glooe-release.yaml install/manifest/glooe-distribution.yaml update-helm-chart

# creates Chart.yaml, values.yaml, and requirements.yaml
.PHONY: helm-template
helm-template:
	mkdir -p $(MANIFEST_DIR)
	go run install/helm/gloo-ee/generate.go $(VERSION)

.PHONY: init-helm
init-helm:
	helm repo add helm-hub  https://kubernetes-charts.storage.googleapis.com/
	helm repo add gloo https://storage.googleapis.com/solo-public-helm
	helm dependency update install/helm/gloo-ee

install/manifest/glooe-release.yaml: helm-template
	helm template install/helm/gloo-ee --namespace gloo-system --name=glooe > $@

install/manifest/glooe-distribution.yaml: helm-template
	helm template install/helm/gloo-ee -f install/distribution/values.yaml --namespace gloo-system --name=glooe > $@

update-helm-chart:
ifeq ($(RELEASE),"true")
	mkdir -p $(HELM_SYNC_DIR)/charts
	helm package --destination $(HELM_SYNC_DIR)/charts $(HELM_DIR)/gloo-ee
	helm repo index $(HELM_SYNC_DIR)
endif

.PHONY: render-yaml
render-yaml: install/manifest/glooe-release.yaml install/manifest/glooe-distribution.yaml

#----------------------------------------------------------------------------------
# Release
#----------------------------------------------------------------------------------

.PHONY: upload-github-release-assets
upload-github-release-assets: build-cli render-yaml
	go run ci/upload_github_release_assets.go

.PHONY: push-docs
push-docs:
	go run ci/push_docs.go

#----------------------------------------------------------------------------------
# Docker
#----------------------------------------------------------------------------------
#
#---------
#--------- Push
#---------

DOCKER_IMAGES :=
ifeq ($(RELEASE),"true")
	DOCKER_IMAGES := docker
endif

.PHONY: docker docker-push
docker: apiserver-docker rate-limit-docker extauth-docker gloo-docker gloo-ee-envoy-wrapper-docker observability-docker

# Depends on DOCKER_IMAGES, which is set to docker if RELEASE is "true", otherwise empty (making this a no-op).
# This prevents executing the dependent targets if RELEASE is not true, while still enabling `make docker`
# to be used for local testing.
# docker-push is intended to be run by CI
docker-push: $(DOCKER_IMAGES)
ifeq ($(RELEASE),"true")
	docker push quay.io/solo-io/rate-limit-ee:$(VERSION) && \
	docker push quay.io/solo-io/apiserver-ee:$(VERSION) && \
	docker push quay.io/solo-io/gloo-ee:$(VERSION) && \
	docker push quay.io/solo-io/gloo-ee-envoy-wrapper:$(VERSION) && \
	docker push quay.io/solo-io/observability-ee:$(VERSION) && \
	docker push quay.io/solo-io/extauth-ee:$(VERSION)
endif


push-kind-images: docker
	kind load docker-image quay.io/solo-io/rate-limit-ee:$(VERSION) --name $(CLUSTER_NAME)
	kind load docker-image quay.io/solo-io/apiserver-ee:$(VERSION) --name $(CLUSTER_NAME)
	kind load docker-image quay.io/solo-io/gloo-ee:$(VERSION) --name $(CLUSTER_NAME)
	kind load docker-image quay.io/solo-io/gloo-ee-envoy-wrapper:$(VERSION) --name $(CLUSTER_NAME)
	kind load docker-image quay.io/solo-io/observability-ee:$(VERSION) --name $(CLUSTER_NAME)
	kind load docker-image quay.io/solo-io/extauth-ee:$(VERSION) --name $(CLUSTER_NAME)

#----------------------------------------------------------------------------------
# Distribution
#----------------------------------------------------------------------------------

DISTRIBUTION_DIR=install/distribution
DISTRIBUTION_OUTPUT=$(OUTPUT_DIR)/distribution


.PHONY: distribution
distribution: $(DISTRIBUTION_OUTPUT)

$(DISTRIBUTION_OUTPUT):
ifeq ($(RELEASE),"true")
	go run $(ROOTDIR)/$(DISTRIBUTION_DIR) $(VERSION)
endif

#----------------------------------------------------------------------------------
# Build assets for regression tests
#----------------------------------------------------------------------------------
#
# The following targets are used to generate the assets on which the regression tests rely upon. The following actions are performed:
#
#   1. Push the images to GCR (images have been tagged as $(GCR_REPO_PREFIX)/<image-name>:$(TEST_IMAGE_TAG)
#   2. Generate GlooE value files providing overrides to make the image elements point to GCR
#      - override the repository prefix for all repository names (e.g. quay.io/solo-io/gateway -> gcr.io/gloo-ee/gateway)
#      - set the tag for each image to TEST_IMAGE_TAG
#   3. Package the Gloo Helm chart to the _test directory (also generate an index file)
#
# The regression tests will use the generated Gloo Chart to install Gloo to the GKE test cluster.

.PHONY: build-test-assets $(OUTPUT_DIR)/glooctl-linux-amd64 $(OUTPUT_DIR)/glooctl-darwin-amd64
build-test-assets: push-test-images build-test-chart
.PHONY: build-kind-assets $(OUTPUT_DIR)/glooctl-linux-amd64 $(OUTPUT_DIR)/glooctl-darwin-amd64
build-kind-assets: push-kind-images build-kind-chart
TEST_DOCKER_TARGETS := apiserver-docker-test rate-limit-docker-test extauth-docker-test observability-docker-test gloo-docker-test gloo-ee-envoy-wrapper-docker-test

.PHONY: push-test-images $(TEST_DOCKER_TARGETS)
push-test-images: $(TEST_DOCKER_TARGETS)

apiserver-docker-test: $(OUTPUT_DIR)/apiserver-linux-amd64 $(OUTPUT_DIR)/Dockerfile.apiserver
	docker push $(call get_test_tag,apiserver-ee)

rate-limit-docker-test: $(OUTPUT_DIR)/rate-limit-linux-amd64 $(OUTPUT_DIR)/Dockerfile.rate-limit
	docker push $(call get_test_tag,rate-limit-ee)

extauth-docker-test: $(OUTPUT_DIR)/extauth-linux-amd64 $(OUTPUT_DIR)/Dockerfile.extauth
	docker push $(call get_test_tag,extauth-ee)

observability-docker-test: $(OUTPUT_DIR)/observability-linux-amd64 $(OUTPUT_DIR)/Dockerfile.observability
	docker push $(call get_test_tag,observability-ee)

gloo-docker-test: $(OUTPUT_DIR)/gloo-linux-amd64 $(OUTPUT_DIR)/Dockerfile.gloo
	docker push $(call get_test_tag,gloo-ee)

gloo-ee-envoy-wrapper-docker-test: $(OUTPUT_DIR)/envoyinit-linux-amd64 $(OUTPUT_DIR)/Dockerfile.envoyinit
	docker push $(call get_test_tag,gloo-ee-envoy-wrapper)

.PHONY: build-test-chart
build-test-chart:
	mkdir -p $(TEST_ASSET_DIR)
	go run install/helm/gloo-ee/generate.go $(TEST_IMAGE_TAG) $(GCR_REPO_PREFIX)
	helm repo add helm-hub https://kubernetes-charts.storage.googleapis.com/
	helm repo add gloo https://storage.googleapis.com/solo-public-helm
	helm dependency update install/helm/gloo-ee
	helm package --destination $(TEST_ASSET_DIR) $(HELM_DIR)/gloo-ee
	helm repo index $(TEST_ASSET_DIR)

.PHONY: build-kind-chart
build-kind-chart:
	mkdir -p $(TEST_ASSET_DIR)
	go run install/helm/gloo-ee/generate.go $(VERSION)
	helm repo add helm-hub https://kubernetes-charts.storage.googleapis.com/
	helm repo add gloo https://storage.googleapis.com/solo-public-helm
	helm dependency update install/helm/gloo-ee
	helm package --destination $(TEST_ASSET_DIR) $(HELM_DIR)/gloo-ee
	helm repo index $(TEST_ASSET_DIR)