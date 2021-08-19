// Code generated by MockGen. DO NOT EDIT.
// Source: ./multicluster_reconcilers.go

// Package mock_controller is a generated GoMock package.
package mock_controller

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	reconcile "github.com/solo-io/skv2/pkg/reconcile"
	v1 "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gateway.solo.io/v1"
	controller "github.com/solo-io/solo-projects/projects/gloo-fed/pkg/api/fed.gateway.solo.io/v1/controller"
	predicate "sigs.k8s.io/controller-runtime/pkg/predicate"
)

// MockMulticlusterFederatedGatewayReconciler is a mock of MulticlusterFederatedGatewayReconciler interface.
type MockMulticlusterFederatedGatewayReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedGatewayReconcilerMockRecorder
}

// MockMulticlusterFederatedGatewayReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedGatewayReconciler.
type MockMulticlusterFederatedGatewayReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedGatewayReconciler
}

// NewMockMulticlusterFederatedGatewayReconciler creates a new mock instance.
func NewMockMulticlusterFederatedGatewayReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedGatewayReconciler {
	mock := &MockMulticlusterFederatedGatewayReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedGatewayReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedGatewayReconciler) EXPECT() *MockMulticlusterFederatedGatewayReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedGateway mocks base method.
func (m *MockMulticlusterFederatedGatewayReconciler) ReconcileFederatedGateway(clusterName string, obj *v1.FederatedGateway) (reconcile.Result, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedGateway", clusterName, obj)
	ret0, _ := ret[0].(reconcile.Result)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ReconcileFederatedGateway indicates an expected call of ReconcileFederatedGateway.
func (mr *MockMulticlusterFederatedGatewayReconcilerMockRecorder) ReconcileFederatedGateway(clusterName, obj interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedGateway", reflect.TypeOf((*MockMulticlusterFederatedGatewayReconciler)(nil).ReconcileFederatedGateway), clusterName, obj)
}

// MockMulticlusterFederatedGatewayDeletionReconciler is a mock of MulticlusterFederatedGatewayDeletionReconciler interface.
type MockMulticlusterFederatedGatewayDeletionReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder
}

// MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedGatewayDeletionReconciler.
type MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedGatewayDeletionReconciler
}

// NewMockMulticlusterFederatedGatewayDeletionReconciler creates a new mock instance.
func NewMockMulticlusterFederatedGatewayDeletionReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedGatewayDeletionReconciler {
	mock := &MockMulticlusterFederatedGatewayDeletionReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedGatewayDeletionReconciler) EXPECT() *MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedGatewayDeletion mocks base method.
func (m *MockMulticlusterFederatedGatewayDeletionReconciler) ReconcileFederatedGatewayDeletion(clusterName string, req reconcile.Request) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedGatewayDeletion", clusterName, req)
	ret0, _ := ret[0].(error)
	return ret0
}

// ReconcileFederatedGatewayDeletion indicates an expected call of ReconcileFederatedGatewayDeletion.
func (mr *MockMulticlusterFederatedGatewayDeletionReconcilerMockRecorder) ReconcileFederatedGatewayDeletion(clusterName, req interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedGatewayDeletion", reflect.TypeOf((*MockMulticlusterFederatedGatewayDeletionReconciler)(nil).ReconcileFederatedGatewayDeletion), clusterName, req)
}

// MockMulticlusterFederatedGatewayReconcileLoop is a mock of MulticlusterFederatedGatewayReconcileLoop interface.
type MockMulticlusterFederatedGatewayReconcileLoop struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedGatewayReconcileLoopMockRecorder
}

// MockMulticlusterFederatedGatewayReconcileLoopMockRecorder is the mock recorder for MockMulticlusterFederatedGatewayReconcileLoop.
type MockMulticlusterFederatedGatewayReconcileLoopMockRecorder struct {
	mock *MockMulticlusterFederatedGatewayReconcileLoop
}

// NewMockMulticlusterFederatedGatewayReconcileLoop creates a new mock instance.
func NewMockMulticlusterFederatedGatewayReconcileLoop(ctrl *gomock.Controller) *MockMulticlusterFederatedGatewayReconcileLoop {
	mock := &MockMulticlusterFederatedGatewayReconcileLoop{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedGatewayReconcileLoopMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedGatewayReconcileLoop) EXPECT() *MockMulticlusterFederatedGatewayReconcileLoopMockRecorder {
	return m.recorder
}

// AddMulticlusterFederatedGatewayReconciler mocks base method.
func (m *MockMulticlusterFederatedGatewayReconcileLoop) AddMulticlusterFederatedGatewayReconciler(ctx context.Context, rec controller.MulticlusterFederatedGatewayReconciler, predicates ...predicate.Predicate) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, rec}
	for _, a := range predicates {
		varargs = append(varargs, a)
	}
	m.ctrl.Call(m, "AddMulticlusterFederatedGatewayReconciler", varargs...)
}

// AddMulticlusterFederatedGatewayReconciler indicates an expected call of AddMulticlusterFederatedGatewayReconciler.
func (mr *MockMulticlusterFederatedGatewayReconcileLoopMockRecorder) AddMulticlusterFederatedGatewayReconciler(ctx, rec interface{}, predicates ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, rec}, predicates...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMulticlusterFederatedGatewayReconciler", reflect.TypeOf((*MockMulticlusterFederatedGatewayReconcileLoop)(nil).AddMulticlusterFederatedGatewayReconciler), varargs...)
}

// MockMulticlusterFederatedVirtualServiceReconciler is a mock of MulticlusterFederatedVirtualServiceReconciler interface.
type MockMulticlusterFederatedVirtualServiceReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder
}

// MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedVirtualServiceReconciler.
type MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedVirtualServiceReconciler
}

// NewMockMulticlusterFederatedVirtualServiceReconciler creates a new mock instance.
func NewMockMulticlusterFederatedVirtualServiceReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedVirtualServiceReconciler {
	mock := &MockMulticlusterFederatedVirtualServiceReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedVirtualServiceReconciler) EXPECT() *MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedVirtualService mocks base method.
func (m *MockMulticlusterFederatedVirtualServiceReconciler) ReconcileFederatedVirtualService(clusterName string, obj *v1.FederatedVirtualService) (reconcile.Result, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedVirtualService", clusterName, obj)
	ret0, _ := ret[0].(reconcile.Result)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ReconcileFederatedVirtualService indicates an expected call of ReconcileFederatedVirtualService.
func (mr *MockMulticlusterFederatedVirtualServiceReconcilerMockRecorder) ReconcileFederatedVirtualService(clusterName, obj interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedVirtualService", reflect.TypeOf((*MockMulticlusterFederatedVirtualServiceReconciler)(nil).ReconcileFederatedVirtualService), clusterName, obj)
}

// MockMulticlusterFederatedVirtualServiceDeletionReconciler is a mock of MulticlusterFederatedVirtualServiceDeletionReconciler interface.
type MockMulticlusterFederatedVirtualServiceDeletionReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder
}

// MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedVirtualServiceDeletionReconciler.
type MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedVirtualServiceDeletionReconciler
}

// NewMockMulticlusterFederatedVirtualServiceDeletionReconciler creates a new mock instance.
func NewMockMulticlusterFederatedVirtualServiceDeletionReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedVirtualServiceDeletionReconciler {
	mock := &MockMulticlusterFederatedVirtualServiceDeletionReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedVirtualServiceDeletionReconciler) EXPECT() *MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedVirtualServiceDeletion mocks base method.
func (m *MockMulticlusterFederatedVirtualServiceDeletionReconciler) ReconcileFederatedVirtualServiceDeletion(clusterName string, req reconcile.Request) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedVirtualServiceDeletion", clusterName, req)
	ret0, _ := ret[0].(error)
	return ret0
}

// ReconcileFederatedVirtualServiceDeletion indicates an expected call of ReconcileFederatedVirtualServiceDeletion.
func (mr *MockMulticlusterFederatedVirtualServiceDeletionReconcilerMockRecorder) ReconcileFederatedVirtualServiceDeletion(clusterName, req interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedVirtualServiceDeletion", reflect.TypeOf((*MockMulticlusterFederatedVirtualServiceDeletionReconciler)(nil).ReconcileFederatedVirtualServiceDeletion), clusterName, req)
}

// MockMulticlusterFederatedVirtualServiceReconcileLoop is a mock of MulticlusterFederatedVirtualServiceReconcileLoop interface.
type MockMulticlusterFederatedVirtualServiceReconcileLoop struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder
}

// MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder is the mock recorder for MockMulticlusterFederatedVirtualServiceReconcileLoop.
type MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder struct {
	mock *MockMulticlusterFederatedVirtualServiceReconcileLoop
}

// NewMockMulticlusterFederatedVirtualServiceReconcileLoop creates a new mock instance.
func NewMockMulticlusterFederatedVirtualServiceReconcileLoop(ctrl *gomock.Controller) *MockMulticlusterFederatedVirtualServiceReconcileLoop {
	mock := &MockMulticlusterFederatedVirtualServiceReconcileLoop{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedVirtualServiceReconcileLoop) EXPECT() *MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder {
	return m.recorder
}

// AddMulticlusterFederatedVirtualServiceReconciler mocks base method.
func (m *MockMulticlusterFederatedVirtualServiceReconcileLoop) AddMulticlusterFederatedVirtualServiceReconciler(ctx context.Context, rec controller.MulticlusterFederatedVirtualServiceReconciler, predicates ...predicate.Predicate) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, rec}
	for _, a := range predicates {
		varargs = append(varargs, a)
	}
	m.ctrl.Call(m, "AddMulticlusterFederatedVirtualServiceReconciler", varargs...)
}

// AddMulticlusterFederatedVirtualServiceReconciler indicates an expected call of AddMulticlusterFederatedVirtualServiceReconciler.
func (mr *MockMulticlusterFederatedVirtualServiceReconcileLoopMockRecorder) AddMulticlusterFederatedVirtualServiceReconciler(ctx, rec interface{}, predicates ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, rec}, predicates...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMulticlusterFederatedVirtualServiceReconciler", reflect.TypeOf((*MockMulticlusterFederatedVirtualServiceReconcileLoop)(nil).AddMulticlusterFederatedVirtualServiceReconciler), varargs...)
}

// MockMulticlusterFederatedRouteTableReconciler is a mock of MulticlusterFederatedRouteTableReconciler interface.
type MockMulticlusterFederatedRouteTableReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedRouteTableReconcilerMockRecorder
}

// MockMulticlusterFederatedRouteTableReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedRouteTableReconciler.
type MockMulticlusterFederatedRouteTableReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedRouteTableReconciler
}

// NewMockMulticlusterFederatedRouteTableReconciler creates a new mock instance.
func NewMockMulticlusterFederatedRouteTableReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedRouteTableReconciler {
	mock := &MockMulticlusterFederatedRouteTableReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedRouteTableReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedRouteTableReconciler) EXPECT() *MockMulticlusterFederatedRouteTableReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedRouteTable mocks base method.
func (m *MockMulticlusterFederatedRouteTableReconciler) ReconcileFederatedRouteTable(clusterName string, obj *v1.FederatedRouteTable) (reconcile.Result, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedRouteTable", clusterName, obj)
	ret0, _ := ret[0].(reconcile.Result)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ReconcileFederatedRouteTable indicates an expected call of ReconcileFederatedRouteTable.
func (mr *MockMulticlusterFederatedRouteTableReconcilerMockRecorder) ReconcileFederatedRouteTable(clusterName, obj interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedRouteTable", reflect.TypeOf((*MockMulticlusterFederatedRouteTableReconciler)(nil).ReconcileFederatedRouteTable), clusterName, obj)
}

// MockMulticlusterFederatedRouteTableDeletionReconciler is a mock of MulticlusterFederatedRouteTableDeletionReconciler interface.
type MockMulticlusterFederatedRouteTableDeletionReconciler struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder
}

// MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder is the mock recorder for MockMulticlusterFederatedRouteTableDeletionReconciler.
type MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder struct {
	mock *MockMulticlusterFederatedRouteTableDeletionReconciler
}

// NewMockMulticlusterFederatedRouteTableDeletionReconciler creates a new mock instance.
func NewMockMulticlusterFederatedRouteTableDeletionReconciler(ctrl *gomock.Controller) *MockMulticlusterFederatedRouteTableDeletionReconciler {
	mock := &MockMulticlusterFederatedRouteTableDeletionReconciler{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedRouteTableDeletionReconciler) EXPECT() *MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder {
	return m.recorder
}

// ReconcileFederatedRouteTableDeletion mocks base method.
func (m *MockMulticlusterFederatedRouteTableDeletionReconciler) ReconcileFederatedRouteTableDeletion(clusterName string, req reconcile.Request) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ReconcileFederatedRouteTableDeletion", clusterName, req)
	ret0, _ := ret[0].(error)
	return ret0
}

// ReconcileFederatedRouteTableDeletion indicates an expected call of ReconcileFederatedRouteTableDeletion.
func (mr *MockMulticlusterFederatedRouteTableDeletionReconcilerMockRecorder) ReconcileFederatedRouteTableDeletion(clusterName, req interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ReconcileFederatedRouteTableDeletion", reflect.TypeOf((*MockMulticlusterFederatedRouteTableDeletionReconciler)(nil).ReconcileFederatedRouteTableDeletion), clusterName, req)
}

// MockMulticlusterFederatedRouteTableReconcileLoop is a mock of MulticlusterFederatedRouteTableReconcileLoop interface.
type MockMulticlusterFederatedRouteTableReconcileLoop struct {
	ctrl     *gomock.Controller
	recorder *MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder
}

// MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder is the mock recorder for MockMulticlusterFederatedRouteTableReconcileLoop.
type MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder struct {
	mock *MockMulticlusterFederatedRouteTableReconcileLoop
}

// NewMockMulticlusterFederatedRouteTableReconcileLoop creates a new mock instance.
func NewMockMulticlusterFederatedRouteTableReconcileLoop(ctrl *gomock.Controller) *MockMulticlusterFederatedRouteTableReconcileLoop {
	mock := &MockMulticlusterFederatedRouteTableReconcileLoop{ctrl: ctrl}
	mock.recorder = &MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockMulticlusterFederatedRouteTableReconcileLoop) EXPECT() *MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder {
	return m.recorder
}

// AddMulticlusterFederatedRouteTableReconciler mocks base method.
func (m *MockMulticlusterFederatedRouteTableReconcileLoop) AddMulticlusterFederatedRouteTableReconciler(ctx context.Context, rec controller.MulticlusterFederatedRouteTableReconciler, predicates ...predicate.Predicate) {
	m.ctrl.T.Helper()
	varargs := []interface{}{ctx, rec}
	for _, a := range predicates {
		varargs = append(varargs, a)
	}
	m.ctrl.Call(m, "AddMulticlusterFederatedRouteTableReconciler", varargs...)
}

// AddMulticlusterFederatedRouteTableReconciler indicates an expected call of AddMulticlusterFederatedRouteTableReconciler.
func (mr *MockMulticlusterFederatedRouteTableReconcileLoopMockRecorder) AddMulticlusterFederatedRouteTableReconciler(ctx, rec interface{}, predicates ...interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	varargs := append([]interface{}{ctx, rec}, predicates...)
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "AddMulticlusterFederatedRouteTableReconciler", reflect.TypeOf((*MockMulticlusterFederatedRouteTableReconcileLoop)(nil).AddMulticlusterFederatedRouteTableReconciler), varargs...)
}
