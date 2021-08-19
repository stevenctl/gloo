// Code generated by MockGen. DO NOT EDIT.
// Source: ./interfaces.go

// Package mock_placement is a generated GoMock package.
package mock_placement

import (
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	v1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.solo.io/core/v1"
	placement "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/federation/placement"
)

// MockStatusBuilder is a mock of StatusBuilder interface.
type MockStatusBuilder struct {
	ctrl     *gomock.Controller
	recorder *MockStatusBuilderMockRecorder
}

// MockStatusBuilderMockRecorder is the mock recorder for MockStatusBuilder.
type MockStatusBuilderMockRecorder struct {
	mock *MockStatusBuilder
}

// NewMockStatusBuilder creates a new mock instance.
func NewMockStatusBuilder(ctrl *gomock.Controller) *MockStatusBuilder {
	mock := &MockStatusBuilder{ctrl: ctrl}
	mock.recorder = &MockStatusBuilderMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockStatusBuilder) EXPECT() *MockStatusBuilderMockRecorder {
	return m.recorder
}

// AddDestination mocks base method.
func (m *MockStatusBuilder) AddDestination(cluster, namespace string, namespaceStatus v1.PlacementStatus_Namespace) placement.StatusBuilder {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddDestination", cluster, namespace, namespaceStatus)
	ret0, _ := ret[0].(placement.StatusBuilder)
	return ret0
}

// AddDestination indicates an expected call of AddDestination.
func (mr *MockStatusBuilderMockRecorder) AddDestination(cluster, namespace, namespaceStatus interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddDestination", reflect.TypeOf((*MockStatusBuilder)(nil).AddDestination), cluster, namespace, namespaceStatus)
}

// AddDestinations mocks base method.
func (m *MockStatusBuilder) AddDestinations(clusters, namespaces []string, namespaceStatus v1.PlacementStatus_Namespace) placement.StatusBuilder {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "AddDestinations", clusters, namespaces, namespaceStatus)
	ret0, _ := ret[0].(placement.StatusBuilder)
	return ret0
}

// AddDestinations indicates an expected call of AddDestinations.
func (mr *MockStatusBuilderMockRecorder) AddDestinations(clusters, namespaces, namespaceStatus interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddDestinations", reflect.TypeOf((*MockStatusBuilder)(nil).AddDestinations), clusters, namespaces, namespaceStatus)
}

// Build mocks base method.
func (m *MockStatusBuilder) Build(generation int64) *v1.PlacementStatus {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Build", generation)
	ret0, _ := ret[0].(*v1.PlacementStatus)
	return ret0
}

// Build indicates an expected call of Build.
func (mr *MockStatusBuilderMockRecorder) Build(generation interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Build", reflect.TypeOf((*MockStatusBuilder)(nil).Build), generation)
}

// Eject mocks base method.
func (m *MockStatusBuilder) Eject(generation int64) *v1.PlacementStatus {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "Eject", generation)
	ret0, _ := ret[0].(*v1.PlacementStatus)
	return ret0
}

// Eject indicates an expected call of Eject.
func (mr *MockStatusBuilderMockRecorder) Eject(generation interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "Eject", reflect.TypeOf((*MockStatusBuilder)(nil).Eject), generation)
}

// UpdateUnprocessed mocks base method.
func (m *MockStatusBuilder) UpdateUnprocessed(status *v1.PlacementStatus, reason string, state v1.PlacementStatus_State) placement.StatusBuilder {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "UpdateUnprocessed", status, reason, state)
	ret0, _ := ret[0].(placement.StatusBuilder)
	return ret0
}

// UpdateUnprocessed indicates an expected call of UpdateUnprocessed.
func (mr *MockStatusBuilderMockRecorder) UpdateUnprocessed(status, reason, state interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "UpdateUnprocessed", reflect.TypeOf((*MockStatusBuilder)(nil).UpdateUnprocessed), status, reason, state)
}

// MockStatusBuilderFactory is a mock of StatusBuilderFactory interface.
type MockStatusBuilderFactory struct {
	ctrl     *gomock.Controller
	recorder *MockStatusBuilderFactoryMockRecorder
}

// MockStatusBuilderFactoryMockRecorder is the mock recorder for MockStatusBuilderFactory.
type MockStatusBuilderFactoryMockRecorder struct {
	mock *MockStatusBuilderFactory
}

// NewMockStatusBuilderFactory creates a new mock instance.
func NewMockStatusBuilderFactory(ctrl *gomock.Controller) *MockStatusBuilderFactory {
	mock := &MockStatusBuilderFactory{ctrl: ctrl}
	mock.recorder = &MockStatusBuilderFactoryMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockStatusBuilderFactory) EXPECT() *MockStatusBuilderFactoryMockRecorder {
	return m.recorder
}

// GetBuilder mocks base method.
func (m *MockStatusBuilderFactory) GetBuilder() placement.StatusBuilder {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetBuilder")
	ret0, _ := ret[0].(placement.StatusBuilder)
	return ret0
}

// GetBuilder indicates an expected call of GetBuilder.
func (mr *MockStatusBuilderFactoryMockRecorder) GetBuilder() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetBuilder", reflect.TypeOf((*MockStatusBuilderFactory)(nil).GetBuilder))
}
