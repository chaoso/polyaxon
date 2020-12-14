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

/**
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.4.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import RuntimeError from '../model/RuntimeError';
import V1ListQueuesResponse from '../model/V1ListQueuesResponse';
import V1Queue from '../model/V1Queue';

/**
* QueuesV1 service.
* @module api/QueuesV1Api
* @version 1.4.4
*/
export default class QueuesV1Api {

    /**
    * Constructs a new QueuesV1Api. 
    * Polyaxon sdk
    * @alias module:api/QueuesV1Api
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createQueue operation.
     * @callback module:api/QueuesV1Api~createQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create queue
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent that consumes the queue
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~createQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    createQueue(owner, agent, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling createQueue");
      }
      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling createQueue");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createQueue");
      }

      let pathParams = {
        'owner': owner,
        'agent': agent
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Queue;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteQueue operation.
     * @callback module:api/QueuesV1Api~deleteQueueCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete queue
     * @param {String} owner Owner of the namespace
     * @param {String} entity Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/QueuesV1Api~deleteQueueCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteQueue(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling deleteQueue");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling deleteQueue");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling deleteQueue");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getQueue operation.
     * @callback module:api/QueuesV1Api~getQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get queue
     * @param {String} owner Owner of the namespace
     * @param {String} entity Owner of the namespace
     * @param {String} uuid Uuid identifier of the entity
     * @param {module:api/QueuesV1Api~getQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    getQueue(owner, entity, uuid, callback) {
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling getQueue");
      }
      // verify the required parameter 'entity' is set
      if (entity === undefined || entity === null) {
        throw new Error("Missing the required parameter 'entity' when calling getQueue");
      }
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling getQueue");
      }

      let pathParams = {
        'owner': owner,
        'entity': entity,
        'uuid': uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1Queue;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{entity}/queues/{uuid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationQueueNames operation.
     * @callback module:api/QueuesV1Api~listOrganizationQueueNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization level queues names
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~listOrganizationQueueNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    listOrganizationQueueNames(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listOrganizationQueueNames");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListQueuesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/queues/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listOrganizationQueues operation.
     * @callback module:api/QueuesV1Api~listOrganizationQueuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List organization level queues
     * @param {String} owner Owner of the namespace
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~listOrganizationQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    listOrganizationQueues(owner, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listOrganizationQueues");
      }

      let pathParams = {
        'owner': owner
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListQueuesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/queues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listQueueNames operation.
     * @callback module:api/QueuesV1Api~listQueueNamesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List queues names
     * @param {String} owner Owner of the namespace
     * @param {String} name Entity managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~listQueueNamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    listQueueNames(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listQueueNames");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listQueueNames");
      }

      let pathParams = {
        'owner': owner,
        'name': name
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListQueuesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{name}/queues/names', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listQueues operation.
     * @callback module:api/QueuesV1Api~listQueuesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1ListQueuesResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List queues
     * @param {String} owner Owner of the namespace
     * @param {String} name Entity managing the resource
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Pagination offset.
     * @param {Number} opts.limit Limit size.
     * @param {String} opts.sort Sort to order the search.
     * @param {String} opts.query Query filter the search search.
     * @param {module:api/QueuesV1Api~listQueuesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1ListQueuesResponse}
     */
    listQueues(owner, name, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling listQueues");
      }
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling listQueues");
      }

      let pathParams = {
        'owner': owner,
        'name': name
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'query': opts['query']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1ListQueuesResponse;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{name}/queues', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchQueue operation.
     * @callback module:api/QueuesV1Api~patchQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Patch queue
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent that consumes the queue
     * @param {String} queue_uuid UUID
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~patchQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    patchQueue(owner, agent, queue_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling patchQueue");
      }
      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling patchQueue");
      }
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling patchQueue");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling patchQueue");
      }

      let pathParams = {
        'owner': owner,
        'agent': agent,
        'queue.uuid': queue_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Queue;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateQueue operation.
     * @callback module:api/QueuesV1Api~updateQueueCallback
     * @param {String} error Error message, if any.
     * @param {module:model/V1Queue} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update queue
     * @param {String} owner Owner of the namespace
     * @param {String} agent Agent that consumes the queue
     * @param {String} queue_uuid UUID
     * @param {module:model/V1Queue} body Queue body
     * @param {module:api/QueuesV1Api~updateQueueCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/V1Queue}
     */
    updateQueue(owner, agent, queue_uuid, body, callback) {
      let postBody = body;
      // verify the required parameter 'owner' is set
      if (owner === undefined || owner === null) {
        throw new Error("Missing the required parameter 'owner' when calling updateQueue");
      }
      // verify the required parameter 'agent' is set
      if (agent === undefined || agent === null) {
        throw new Error("Missing the required parameter 'agent' when calling updateQueue");
      }
      // verify the required parameter 'queue_uuid' is set
      if (queue_uuid === undefined || queue_uuid === null) {
        throw new Error("Missing the required parameter 'queue_uuid' when calling updateQueue");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateQueue");
      }

      let pathParams = {
        'owner': owner,
        'agent': agent,
        'queue.uuid': queue_uuid
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['ApiKey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1Queue;
      return this.apiClient.callApi(
        '/api/v1/orgs/{owner}/agents/{agent}/queues/{queue.uuid}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
