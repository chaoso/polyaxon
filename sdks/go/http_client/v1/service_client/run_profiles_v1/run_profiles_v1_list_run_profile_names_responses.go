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

package run_profiles_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// RunProfilesV1ListRunProfileNamesReader is a Reader for the RunProfilesV1ListRunProfileNames structure.
type RunProfilesV1ListRunProfileNamesReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *RunProfilesV1ListRunProfileNamesReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewRunProfilesV1ListRunProfileNamesOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewRunProfilesV1ListRunProfileNamesNoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewRunProfilesV1ListRunProfileNamesForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewRunProfilesV1ListRunProfileNamesNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewRunProfilesV1ListRunProfileNamesDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewRunProfilesV1ListRunProfileNamesOK creates a RunProfilesV1ListRunProfileNamesOK with default headers values
func NewRunProfilesV1ListRunProfileNamesOK() *RunProfilesV1ListRunProfileNamesOK {
	return &RunProfilesV1ListRunProfileNamesOK{}
}

/*RunProfilesV1ListRunProfileNamesOK handles this case with default header values.

A successful response.
*/
type RunProfilesV1ListRunProfileNamesOK struct {
	Payload *service_model.V1ListRunProfilesResponse
}

func (o *RunProfilesV1ListRunProfileNamesOK) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/run_profiles/names][%d] runProfilesV1ListRunProfileNamesOK  %+v", 200, o.Payload)
}

func (o *RunProfilesV1ListRunProfileNamesOK) GetPayload() *service_model.V1ListRunProfilesResponse {
	return o.Payload
}

func (o *RunProfilesV1ListRunProfileNamesOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1ListRunProfilesResponse)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRunProfilesV1ListRunProfileNamesNoContent creates a RunProfilesV1ListRunProfileNamesNoContent with default headers values
func NewRunProfilesV1ListRunProfileNamesNoContent() *RunProfilesV1ListRunProfileNamesNoContent {
	return &RunProfilesV1ListRunProfileNamesNoContent{}
}

/*RunProfilesV1ListRunProfileNamesNoContent handles this case with default header values.

No content.
*/
type RunProfilesV1ListRunProfileNamesNoContent struct {
	Payload interface{}
}

func (o *RunProfilesV1ListRunProfileNamesNoContent) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/run_profiles/names][%d] runProfilesV1ListRunProfileNamesNoContent  %+v", 204, o.Payload)
}

func (o *RunProfilesV1ListRunProfileNamesNoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *RunProfilesV1ListRunProfileNamesNoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRunProfilesV1ListRunProfileNamesForbidden creates a RunProfilesV1ListRunProfileNamesForbidden with default headers values
func NewRunProfilesV1ListRunProfileNamesForbidden() *RunProfilesV1ListRunProfileNamesForbidden {
	return &RunProfilesV1ListRunProfileNamesForbidden{}
}

/*RunProfilesV1ListRunProfileNamesForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type RunProfilesV1ListRunProfileNamesForbidden struct {
	Payload interface{}
}

func (o *RunProfilesV1ListRunProfileNamesForbidden) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/run_profiles/names][%d] runProfilesV1ListRunProfileNamesForbidden  %+v", 403, o.Payload)
}

func (o *RunProfilesV1ListRunProfileNamesForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *RunProfilesV1ListRunProfileNamesForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRunProfilesV1ListRunProfileNamesNotFound creates a RunProfilesV1ListRunProfileNamesNotFound with default headers values
func NewRunProfilesV1ListRunProfileNamesNotFound() *RunProfilesV1ListRunProfileNamesNotFound {
	return &RunProfilesV1ListRunProfileNamesNotFound{}
}

/*RunProfilesV1ListRunProfileNamesNotFound handles this case with default header values.

Resource does not exist.
*/
type RunProfilesV1ListRunProfileNamesNotFound struct {
	Payload interface{}
}

func (o *RunProfilesV1ListRunProfileNamesNotFound) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/run_profiles/names][%d] runProfilesV1ListRunProfileNamesNotFound  %+v", 404, o.Payload)
}

func (o *RunProfilesV1ListRunProfileNamesNotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *RunProfilesV1ListRunProfileNamesNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewRunProfilesV1ListRunProfileNamesDefault creates a RunProfilesV1ListRunProfileNamesDefault with default headers values
func NewRunProfilesV1ListRunProfileNamesDefault(code int) *RunProfilesV1ListRunProfileNamesDefault {
	return &RunProfilesV1ListRunProfileNamesDefault{
		_statusCode: code,
	}
}

/*RunProfilesV1ListRunProfileNamesDefault handles this case with default header values.

An unexpected error response
*/
type RunProfilesV1ListRunProfileNamesDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the run profiles v1 list run profile names default response
func (o *RunProfilesV1ListRunProfileNamesDefault) Code() int {
	return o._statusCode
}

func (o *RunProfilesV1ListRunProfileNamesDefault) Error() string {
	return fmt.Sprintf("[GET /api/v1/orgs/{owner}/run_profiles/names][%d] RunProfilesV1_ListRunProfileNames default  %+v", o._statusCode, o.Payload)
}

func (o *RunProfilesV1ListRunProfileNamesDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *RunProfilesV1ListRunProfileNamesDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}