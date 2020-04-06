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

package projects_v1

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"
	"github.com/go-openapi/strfmt"

	"github.com/polyaxon/polyaxon/sdks/go/http_client/v1/service_model"
)

// ProjectsV1EnableProjectCIReader is a Reader for the ProjectsV1EnableProjectCI structure.
type ProjectsV1EnableProjectCIReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *ProjectsV1EnableProjectCIReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewProjectsV1EnableProjectCIOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 204:
		result := NewProjectsV1EnableProjectCINoContent()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 403:
		result := NewProjectsV1EnableProjectCIForbidden()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	case 404:
		result := NewProjectsV1EnableProjectCINotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result
	default:
		result := NewProjectsV1EnableProjectCIDefault(response.Code())
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		if response.Code()/100 == 2 {
			return result, nil
		}
		return nil, result
	}
}

// NewProjectsV1EnableProjectCIOK creates a ProjectsV1EnableProjectCIOK with default headers values
func NewProjectsV1EnableProjectCIOK() *ProjectsV1EnableProjectCIOK {
	return &ProjectsV1EnableProjectCIOK{}
}

/*ProjectsV1EnableProjectCIOK handles this case with default header values.

A successful response.
*/
type ProjectsV1EnableProjectCIOK struct {
}

func (o *ProjectsV1EnableProjectCIOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/ci][%d] projectsV1EnableProjectCIOK ", 200)
}

func (o *ProjectsV1EnableProjectCIOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	return nil
}

// NewProjectsV1EnableProjectCINoContent creates a ProjectsV1EnableProjectCINoContent with default headers values
func NewProjectsV1EnableProjectCINoContent() *ProjectsV1EnableProjectCINoContent {
	return &ProjectsV1EnableProjectCINoContent{}
}

/*ProjectsV1EnableProjectCINoContent handles this case with default header values.

No content.
*/
type ProjectsV1EnableProjectCINoContent struct {
	Payload interface{}
}

func (o *ProjectsV1EnableProjectCINoContent) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/ci][%d] projectsV1EnableProjectCINoContent  %+v", 204, o.Payload)
}

func (o *ProjectsV1EnableProjectCINoContent) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1EnableProjectCINoContent) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1EnableProjectCIForbidden creates a ProjectsV1EnableProjectCIForbidden with default headers values
func NewProjectsV1EnableProjectCIForbidden() *ProjectsV1EnableProjectCIForbidden {
	return &ProjectsV1EnableProjectCIForbidden{}
}

/*ProjectsV1EnableProjectCIForbidden handles this case with default header values.

You don't have permission to access the resource.
*/
type ProjectsV1EnableProjectCIForbidden struct {
	Payload interface{}
}

func (o *ProjectsV1EnableProjectCIForbidden) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/ci][%d] projectsV1EnableProjectCIForbidden  %+v", 403, o.Payload)
}

func (o *ProjectsV1EnableProjectCIForbidden) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1EnableProjectCIForbidden) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1EnableProjectCINotFound creates a ProjectsV1EnableProjectCINotFound with default headers values
func NewProjectsV1EnableProjectCINotFound() *ProjectsV1EnableProjectCINotFound {
	return &ProjectsV1EnableProjectCINotFound{}
}

/*ProjectsV1EnableProjectCINotFound handles this case with default header values.

Resource does not exist.
*/
type ProjectsV1EnableProjectCINotFound struct {
	Payload interface{}
}

func (o *ProjectsV1EnableProjectCINotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/ci][%d] projectsV1EnableProjectCINotFound  %+v", 404, o.Payload)
}

func (o *ProjectsV1EnableProjectCINotFound) GetPayload() interface{} {
	return o.Payload
}

func (o *ProjectsV1EnableProjectCINotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewProjectsV1EnableProjectCIDefault creates a ProjectsV1EnableProjectCIDefault with default headers values
func NewProjectsV1EnableProjectCIDefault(code int) *ProjectsV1EnableProjectCIDefault {
	return &ProjectsV1EnableProjectCIDefault{
		_statusCode: code,
	}
}

/*ProjectsV1EnableProjectCIDefault handles this case with default header values.

An unexpected error response
*/
type ProjectsV1EnableProjectCIDefault struct {
	_statusCode int

	Payload *service_model.RuntimeError
}

// Code gets the status code for the projects v1 enable project c i default response
func (o *ProjectsV1EnableProjectCIDefault) Code() int {
	return o._statusCode
}

func (o *ProjectsV1EnableProjectCIDefault) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/ci][%d] ProjectsV1_EnableProjectCI default  %+v", o._statusCode, o.Payload)
}

func (o *ProjectsV1EnableProjectCIDefault) GetPayload() *service_model.RuntimeError {
	return o.Payload
}

func (o *ProjectsV1EnableProjectCIDefault) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.RuntimeError)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}