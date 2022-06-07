// Code generated by skv2. DO NOT EDIT.

package single_cluster_resource_handler

import (
	"context"
	"sort"
	"strings"

	"github.com/ghodss/yaml"
	"github.com/rotisserie/eris"
	"github.com/solo-io/go-utils/contextutils"
	skv2_v1 "github.com/solo-io/skv2/pkg/api/core.skv2.solo.io/v1"
	enterprise_gloo_solo_io_v1 "github.com/solo-io/solo-apis/pkg/api/enterprise.gloo.solo.io/v1"
	rpc_edge_v1 "github.com/solo-io/solo-projects/projects/apiserver/pkg/api/rpc.edge.gloo/v1"
	"github.com/solo-io/solo-projects/projects/apiserver/server/apiserverutils"
	"github.com/solo-io/solo-projects/projects/apiserver/server/services/glooinstance_handler"
	"go.uber.org/zap"
	"sigs.k8s.io/controller-runtime/pkg/client"
)

func NewSingleClusterEnterpriseGlooResourceHandler(
	enterprise_glooClientset enterprise_gloo_solo_io_v1.Clientset,
	glooInstanceLister glooinstance_handler.SingleClusterGlooInstanceLister,
) rpc_edge_v1.EnterpriseGlooResourceApiServer {
	return &singleClusterEnterpriseGlooResourceHandler{
		enterprise_glooClientset: enterprise_glooClientset,
		glooInstanceLister:       glooInstanceLister,
	}
}

type singleClusterEnterpriseGlooResourceHandler struct {
	enterprise_glooClientset enterprise_gloo_solo_io_v1.Clientset
	glooInstanceLister       glooinstance_handler.SingleClusterGlooInstanceLister
}

func (h *singleClusterEnterpriseGlooResourceHandler) ListAuthConfigs(ctx context.Context, request *rpc_edge_v1.ListAuthConfigsRequest) (*rpc_edge_v1.ListAuthConfigsResponse, error) {
	var rpcAuthConfigs []*rpc_edge_v1.AuthConfig
	if request.GetGlooInstanceRef() == nil || request.GetGlooInstanceRef().GetName() == "" || request.GetGlooInstanceRef().GetNamespace() == "" {
		// List authConfigs across all gloo edge instances
		instanceList, err := h.glooInstanceLister.ListGlooInstances(ctx)
		if err != nil {
			wrapped := eris.Wrapf(err, "Failed to list gloo edge instances")
			contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
			return nil, wrapped
		}
		for _, instance := range instanceList {
			rpcAuthConfigList, err := h.listAuthConfigsForGlooInstance(ctx, instance)
			if err != nil {
				wrapped := eris.Wrapf(err, "Failed to list authConfigs for gloo edge instance %v", instance)
				contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
				return nil, wrapped
			}
			rpcAuthConfigs = append(rpcAuthConfigs, rpcAuthConfigList...)
		}
	} else {
		// List authConfigs for a specific gloo edge instance
		instance, err := h.glooInstanceLister.GetGlooInstance(ctx, request.GetGlooInstanceRef())
		if err != nil {
			wrapped := eris.Wrap(err, "Failed to get gloo edge instance")
			contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
			return nil, wrapped
		}
		rpcAuthConfigs, err = h.listAuthConfigsForGlooInstance(ctx, instance)
		if err != nil {
			wrapped := eris.Wrapf(err, "Failed to list authConfigs for gloo edge instance %v", instance)
			contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
			return nil, wrapped
		}
	}

	// Search, Filter
	var filteredAuthConfigs []*rpc_edge_v1.AuthConfig
	qs := request.GetQueryString()
	sf := request.GetStatusFilter()
	if sf != nil || qs != "" {
		for _, d := range rpcAuthConfigs {
			if (sf == nil || sf.State == int32(d.Status.State)) && strings.Contains(d.Metadata.Name, qs) {
				filteredAuthConfigs = append(filteredAuthConfigs, d)
			}
		}
	} else {
		filteredAuthConfigs = rpcAuthConfigs
	}
	// Sort
	sortOptions := request.GetSortOptions()
	if sortOptions != nil {
		isDescending := sortOptions.GetDescending()
		sortKey := sortOptions.GetSortKey()
		if isDescending == true {
			switch sortKey {
			case rpc_edge_v1.SortOptions_NAME:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Metadata.Name > filteredAuthConfigs[j].Metadata.Name
				})
			case rpc_edge_v1.SortOptions_NAMESPACE:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Metadata.Namespace > filteredAuthConfigs[j].Metadata.Namespace
				})
			case rpc_edge_v1.SortOptions_STATUS:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Status.State > filteredAuthConfigs[j].Status.State
				})
			}
		} else {
			switch sortKey {
			case rpc_edge_v1.SortOptions_NAME:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Metadata.Name < filteredAuthConfigs[j].Metadata.Name
				})
			case rpc_edge_v1.SortOptions_NAMESPACE:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Metadata.Namespace < filteredAuthConfigs[j].Metadata.Namespace
				})
			case rpc_edge_v1.SortOptions_STATUS:
				sort.Slice(filteredAuthConfigs, func(i, j int) bool {
					return filteredAuthConfigs[i].Status.State < filteredAuthConfigs[j].Status.State
				})
			}
		}
	}
	// Paginate
	paginatedAuthConfigs := filteredAuthConfigs
	pagination := request.GetPagination()
	totalCount := int32(len(filteredAuthConfigs))
	if pagination.GetLimit() > 0 && pagination.GetOffset() >= 0 {
		start := apiserverutils.Min(pagination.GetOffset(), totalCount)
		end := apiserverutils.Min(pagination.GetOffset()+pagination.GetLimit(), totalCount)
		paginatedAuthConfigs = filteredAuthConfigs[start:end]
	}
	// Build response
	res := &rpc_edge_v1.ListAuthConfigsResponse{
		AuthConfigs: paginatedAuthConfigs,
		Total:       totalCount,
	}
	return res, nil
}

func (h *singleClusterEnterpriseGlooResourceHandler) listAuthConfigsForGlooInstance(ctx context.Context, instance *rpc_edge_v1.GlooInstance) ([]*rpc_edge_v1.AuthConfig, error) {
	var authConfigList []*enterprise_gloo_solo_io_v1.AuthConfig
	watchedNamespaces := instance.Spec.GetControlPlane().GetWatchedNamespaces()
	if len(watchedNamespaces) != 0 {
		for _, ns := range watchedNamespaces {
			list, err := h.enterprise_glooClientset.AuthConfigs().ListAuthConfig(ctx, client.InNamespace(ns))
			if err != nil {
				return nil, err
			}
			for i, _ := range list.Items {
				authConfigList = append(authConfigList, &list.Items[i])
			}
		}
	} else {
		list, err := h.enterprise_glooClientset.AuthConfigs().ListAuthConfig(ctx)
		if err != nil {
			return nil, err
		}
		for i, _ := range list.Items {
			authConfigList = append(authConfigList, &list.Items[i])
		}
	}
	sort.Slice(authConfigList, func(i, j int) bool {
		x := authConfigList[i]
		y := authConfigList[j]
		return x.GetNamespace()+x.GetName() < y.GetNamespace()+y.GetName()
	})

	var rpcAuthConfigs []*rpc_edge_v1.AuthConfig
	glooInstanceRef := &skv2_v1.ObjectRef{
		Name:      instance.GetMetadata().GetName(),
		Namespace: instance.GetMetadata().GetNamespace(),
	}
	for _, authConfig := range authConfigList {
		rpcAuthConfigs = append(rpcAuthConfigs, &rpc_edge_v1.AuthConfig{
			Metadata:     apiserverutils.ToMetadata(authConfig.ObjectMeta),
			GlooInstance: glooInstanceRef,
			Spec:         &authConfig.Spec,
			Status:       &authConfig.Status,
		})
	}
	return rpcAuthConfigs, nil
}

func (h *singleClusterEnterpriseGlooResourceHandler) GetAuthConfigYaml(ctx context.Context, request *rpc_edge_v1.GetAuthConfigYamlRequest) (*rpc_edge_v1.GetAuthConfigYamlResponse, error) {
	authConfig, err := h.enterprise_glooClientset.AuthConfigs().GetAuthConfig(ctx, client.ObjectKey{
		Namespace: request.GetAuthConfigRef().GetNamespace(),
		Name:      request.GetAuthConfigRef().GetName(),
	})
	if err != nil {
		wrapped := eris.Wrapf(err, "Failed to get authConfig")
		contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}
	content, err := yaml.Marshal(authConfig)
	if err != nil {
		wrapped := eris.Wrapf(err, "Failed to marshal kube resource into yaml")
		contextutils.LoggerFrom(ctx).Errorw(wrapped.Error(), zap.Error(err), zap.Any("request", request))
		return nil, wrapped
	}
	return &rpc_edge_v1.GetAuthConfigYamlResponse{
		YamlData: &rpc_edge_v1.ResourceYaml{
			Yaml: string(content),
		},
	}, nil
}
