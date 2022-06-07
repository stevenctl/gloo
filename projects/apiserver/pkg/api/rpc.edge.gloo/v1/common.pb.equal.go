// Code generated by protoc-gen-ext. DO NOT EDIT.
// source: github.com/solo-io/solo-projects/projects/apiserver/api/rpc.edge.gloo/v1/common.proto

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
func (m *ObjectMeta) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ObjectMeta)
	if !ok {
		that2, ok := that.(ObjectMeta)
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

	if strings.Compare(m.GetName(), target.GetName()) != 0 {
		return false
	}

	if strings.Compare(m.GetNamespace(), target.GetNamespace()) != 0 {
		return false
	}

	if strings.Compare(m.GetUid(), target.GetUid()) != 0 {
		return false
	}

	if strings.Compare(m.GetResourceVersion(), target.GetResourceVersion()) != 0 {
		return false
	}

	if h, ok := interface{}(m.GetCreationTimestamp()).(equality.Equalizer); ok {
		if !h.Equal(target.GetCreationTimestamp()) {
			return false
		}
	} else {
		if !proto.Equal(m.GetCreationTimestamp(), target.GetCreationTimestamp()) {
			return false
		}
	}

	if len(m.GetLabels()) != len(target.GetLabels()) {
		return false
	}
	for k, v := range m.GetLabels() {

		if strings.Compare(v, target.GetLabels()[k]) != 0 {
			return false
		}

	}

	if len(m.GetAnnotations()) != len(target.GetAnnotations()) {
		return false
	}
	for k, v := range m.GetAnnotations() {

		if strings.Compare(v, target.GetAnnotations()[k]) != 0 {
			return false
		}

	}

	if strings.Compare(m.GetClusterName(), target.GetClusterName()) != 0 {
		return false
	}

	return true
}

// Equal function
func (m *Time) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*Time)
	if !ok {
		that2, ok := that.(Time)
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

	if m.GetSeconds() != target.GetSeconds() {
		return false
	}

	if m.GetNanos() != target.GetNanos() {
		return false
	}

	return true
}

// Equal function
func (m *ResourceYaml) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*ResourceYaml)
	if !ok {
		that2, ok := that.(ResourceYaml)
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

	if strings.Compare(m.GetYaml(), target.GetYaml()) != 0 {
		return false
	}

	return true
}

// Equal function
func (m *Pagination) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*Pagination)
	if !ok {
		that2, ok := that.(Pagination)
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

	if m.GetLimit() != target.GetLimit() {
		return false
	}

	if m.GetOffset() != target.GetOffset() {
		return false
	}

	return true
}

// Equal function
func (m *SortOptions) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*SortOptions)
	if !ok {
		that2, ok := that.(SortOptions)
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

	if m.GetDescending() != target.GetDescending() {
		return false
	}

	if m.GetSortKey() != target.GetSortKey() {
		return false
	}

	return true
}

// Equal function
func (m *StatusFilter) Equal(that interface{}) bool {
	if that == nil {
		return m == nil
	}

	target, ok := that.(*StatusFilter)
	if !ok {
		that2, ok := that.(StatusFilter)
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

	if m.GetState() != target.GetState() {
		return false
	}

	return true
}
