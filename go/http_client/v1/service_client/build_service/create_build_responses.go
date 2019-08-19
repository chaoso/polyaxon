// Copyright 2019 Polyaxon, Inc.
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

package build_service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"

	service_model "github.com/polyaxon/polyaxon-sdks/go/http_client/v1/service_model"
)

// CreateBuildReader is a Reader for the CreateBuild structure.
type CreateBuildReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *CreateBuildReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewCreateBuildOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewCreateBuildNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewCreateBuildOK creates a CreateBuildOK with default headers values
func NewCreateBuildOK() *CreateBuildOK {
	return &CreateBuildOK{}
}

/*CreateBuildOK handles this case with default header values.

A successful response.
*/
type CreateBuildOK struct {
	Payload *service_model.V1Build
}

func (o *CreateBuildOK) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/builds][%d] createBuildOK  %+v", 200, o.Payload)
}

func (o *CreateBuildOK) GetPayload() *service_model.V1Build {
	return o.Payload
}

func (o *CreateBuildOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	o.Payload = new(service_model.V1Build)

	// response payload
	if err := consumer.Consume(response.Body(), o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewCreateBuildNotFound creates a CreateBuildNotFound with default headers values
func NewCreateBuildNotFound() *CreateBuildNotFound {
	return &CreateBuildNotFound{}
}

/*CreateBuildNotFound handles this case with default header values.

Resource does not exist.
*/
type CreateBuildNotFound struct {
	Payload string
}

func (o *CreateBuildNotFound) Error() string {
	return fmt.Sprintf("[POST /api/v1/{owner}/{project}/builds][%d] createBuildNotFound  %+v", 404, o.Payload)
}

func (o *CreateBuildNotFound) GetPayload() string {
	return o.Payload
}

func (o *CreateBuildNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
