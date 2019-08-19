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

package experiment_service

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"fmt"
	"io"

	"github.com/go-openapi/runtime"

	strfmt "github.com/go-openapi/strfmt"
)

// DeleteExperimentsReader is a Reader for the DeleteExperiments structure.
type DeleteExperimentsReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *DeleteExperimentsReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewDeleteExperimentsOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewDeleteExperimentsNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewDeleteExperimentsOK creates a DeleteExperimentsOK with default headers values
func NewDeleteExperimentsOK() *DeleteExperimentsOK {
	return &DeleteExperimentsOK{}
}

/*DeleteExperimentsOK handles this case with default header values.

A successful response.
*/
type DeleteExperimentsOK struct {
	Payload interface{}
}

func (o *DeleteExperimentsOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/experiments/delete][%d] deleteExperimentsOK  %+v", 200, o.Payload)
}

func (o *DeleteExperimentsOK) GetPayload() interface{} {
	return o.Payload
}

func (o *DeleteExperimentsOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewDeleteExperimentsNotFound creates a DeleteExperimentsNotFound with default headers values
func NewDeleteExperimentsNotFound() *DeleteExperimentsNotFound {
	return &DeleteExperimentsNotFound{}
}

/*DeleteExperimentsNotFound handles this case with default header values.

Resource does not exist.
*/
type DeleteExperimentsNotFound struct {
	Payload string
}

func (o *DeleteExperimentsNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/experiments/delete][%d] deleteExperimentsNotFound  %+v", 404, o.Payload)
}

func (o *DeleteExperimentsNotFound) GetPayload() string {
	return o.Payload
}

func (o *DeleteExperimentsNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
