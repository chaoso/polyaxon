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

// StopExperimentTensorboardReader is a Reader for the StopExperimentTensorboard structure.
type StopExperimentTensorboardReader struct {
	formats strfmt.Registry
}

// ReadResponse reads a server response into the received o.
func (o *StopExperimentTensorboardReader) ReadResponse(response runtime.ClientResponse, consumer runtime.Consumer) (interface{}, error) {
	switch response.Code() {
	case 200:
		result := NewStopExperimentTensorboardOK()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return result, nil
	case 404:
		result := NewStopExperimentTensorboardNotFound()
		if err := result.readResponse(response, consumer, o.formats); err != nil {
			return nil, err
		}
		return nil, result

	default:
		return nil, runtime.NewAPIError("unknown error", response, response.Code())
	}
}

// NewStopExperimentTensorboardOK creates a StopExperimentTensorboardOK with default headers values
func NewStopExperimentTensorboardOK() *StopExperimentTensorboardOK {
	return &StopExperimentTensorboardOK{}
}

/*StopExperimentTensorboardOK handles this case with default header values.

A successful response.
*/
type StopExperimentTensorboardOK struct {
	Payload interface{}
}

func (o *StopExperimentTensorboardOK) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/experiments/{id}/tensorboard/stop][%d] stopExperimentTensorboardOK  %+v", 200, o.Payload)
}

func (o *StopExperimentTensorboardOK) GetPayload() interface{} {
	return o.Payload
}

func (o *StopExperimentTensorboardOK) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}

// NewStopExperimentTensorboardNotFound creates a StopExperimentTensorboardNotFound with default headers values
func NewStopExperimentTensorboardNotFound() *StopExperimentTensorboardNotFound {
	return &StopExperimentTensorboardNotFound{}
}

/*StopExperimentTensorboardNotFound handles this case with default header values.

Resource does not exist.
*/
type StopExperimentTensorboardNotFound struct {
	Payload string
}

func (o *StopExperimentTensorboardNotFound) Error() string {
	return fmt.Sprintf("[DELETE /api/v1/{owner}/{project}/experiments/{id}/tensorboard/stop][%d] stopExperimentTensorboardNotFound  %+v", 404, o.Payload)
}

func (o *StopExperimentTensorboardNotFound) GetPayload() string {
	return o.Payload
}

func (o *StopExperimentTensorboardNotFound) readResponse(response runtime.ClientResponse, consumer runtime.Consumer, formats strfmt.Registry) error {

	// response payload
	if err := consumer.Consume(response.Body(), &o.Payload); err != nil && err != io.EOF {
		return err
	}

	return nil
}
