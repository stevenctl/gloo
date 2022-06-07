// Code generated by protoc-gen-ext. DO NOT EDIT.
// source: github.com/solo-io/solo-projects/projects/apiserver/api/rpc.edge.gloo/v1/enterprise_gloo_resources.proto

package v1

import (
	"bytes"
	"encoding/binary"
	"errors"
	"fmt"
	"strings"

	"github.com/golang/protobuf/proto"
	equality "github.com/solo-io/protoc-gen-ext/pkg/equality"
)

// ensure the imports are used
var (
	_ = errors.New("")
	_ = fmt.Print
	_ = binary.LittleEndian
	_ = bytes.Compare
	_ = strings.Compare
	_ = equality.Equalizer(nil)
	_ = proto.Message(nil)
)

// Equal function
func (m *AuthConfig) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*AuthConfig)
	if !ok {
		that2, ok := that.(AuthConfig)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetMetadata()).(equality.Equalizer); ok {
		if !h.Equal(target.GetMetadata()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetMetadata(), target.GetMetadata()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetSpec()).(equality.Equalizer); ok {
		if !h.Equal(target.GetSpec()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetSpec(), target.GetSpec()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetStatus()).(equality.Equalizer); ok {
		if !h.Equal(target.GetStatus()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetStatus(), target.GetStatus()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetGlooInstance()).(equality.Equalizer); ok {
		if !h.Equal(target.GetGlooInstance()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetGlooInstance(), target.GetGlooInstance()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *ListAuthConfigsRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ListAuthConfigsRequest)
	if !ok {
		that2, ok := that.(ListAuthConfigsRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetGlooInstanceRef()).(equality.Equalizer); ok {
		if !h.Equal(target.GetGlooInstanceRef()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetGlooInstanceRef(), target.GetGlooInstanceRef()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetPagination()).(equality.Equalizer); ok {
		if !h.Equal(target.GetPagination()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetPagination(), target.GetPagination()) {
			return false
		}
	}

	if strings.Compare(m.GetQueryString(), target.GetQueryString()) != 0 {
		return false
	}

	if h, ok := interface{}(m.GetStatusFilter()).(equality.Equalizer); ok {
		if !h.Equal(target.GetStatusFilter()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetStatusFilter(), target.GetStatusFilter()) {
			return false
		}
	}

	if h, ok := interface{}(m.GetSortOptions()).(equality.Equalizer); ok {
		if !h.Equal(target.GetSortOptions()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetSortOptions(), target.GetSortOptions()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *ListAuthConfigsResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ListAuthConfigsResponse)
	if !ok {
		that2, ok := that.(ListAuthConfigsResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if len(m.GetAuthConfigs()) != len(target.GetAuthConfigs()) {
		return false
	}
	for idx, v := range m.GetAuthConfigs() {

		if h, ok := interface{}(v).(equality.Equalizer); ok {
			if !h.Equal(target.GetAuthConfigs()[idx]) {
				return false
			}
		} else {
			if !proto.Equal(v, target.GetAuthConfigs()[idx]) {
				return false
			}
		}

	}

	if m.GetTotal() != target.GetTotal() {
		return false
	}

	return true
}

// Equal function
func (m *GetAuthConfigYamlRequest) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*GetAuthConfigYamlRequest)
	if !ok {
		that2, ok := that.(GetAuthConfigYamlRequest)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetAuthConfigRef()).(equality.Equalizer); ok {
		if !h.Equal(target.GetAuthConfigRef()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetAuthConfigRef(), target.GetAuthConfigRef()) {
			return false
		}
	}

	return true
}

// Equal function
func (m *GetAuthConfigYamlResponse) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*GetAuthConfigYamlResponse)
	if !ok {
		that2, ok := that.(GetAuthConfigYamlResponse)
		if ok {
			target = &that2
		} else {
			return false
		}
	}
	if target == nil {
		return m == nil
	} else if m == nil {
		return false
	}

	if h, ok := interface{}(m.GetYamlData()).(equality.Equalizer); ok {
		if !h.Equal(target.GetYamlData()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetYamlData(), target.GetYamlData()) {
			return false
		}
	}

	return true
}
