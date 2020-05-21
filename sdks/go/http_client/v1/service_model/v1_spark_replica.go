// Copyright 2018-2020 Polyaxon, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// Code generated by go-swagger; DO NOT EDIT.

package service_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"strconv"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// V1SparkReplica Spark replica definition
//
// swagger:model v1SparkReplica
type V1SparkReplica struct {

	// Optional container to run
	Container V1Container `json:"container,omitempty"`

	// Optional environment section
	Environment *V1Environment `json:"environment,omitempty"`

	// Optional init connections section
	Init []*V1Init `json:"init"`

	// Number of replicas
	Replicas int32 `json:"replicas,omitempty"`

	// Optional sidecars section
	Sidecars []V1Container `json:"sidecars"`
}

// Validate validates this v1 spark replica
func (m *V1SparkReplica) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateEnvironment(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateInit(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *V1SparkReplica) validateEnvironment(formats strfmt.Registry) error {

	if swag.IsZero(m.Environment) { // not required
		return nil
	}

	if m.Environment != nil {
		if err := m.Environment.Validate(formats); err != nil {
			if ve, ok := err.(*errors.Validation); ok {
				return ve.ValidateName("environment")
			}
			return err
		}
	}

	return nil
}

func (m *V1SparkReplica) validateInit(formats strfmt.Registry) error {

	if swag.IsZero(m.Init) { // not required
		return nil
	}

	for i := 0; i < len(m.Init); i++ {
		if swag.IsZero(m.Init[i]) { // not required
			continue
		}

		if m.Init[i] != nil {
			if err := m.Init[i].Validate(formats); err != nil {
				if ve, ok := err.(*errors.Validation); ok {
					return ve.ValidateName("init" + "." + strconv.Itoa(i))
				}
				return err
			}
		}

	}

	return nil
}

// MarshalBinary interface implementation
func (m *V1SparkReplica) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *V1SparkReplica) UnmarshalBinary(b []byte) error {
	var res V1SparkReplica
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
