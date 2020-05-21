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
 * The version of the OpenAPI document: 1.0.90
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1Termination model module.
 * @module model/V1Termination
 * @version 1.0.90
 */
class V1Termination {
    /**
     * Constructs a new <code>V1Termination</code>.
     * Termination specification, it defines how to handle failures, job runtime, and cleanup policy.
     * @alias module:model/V1Termination
     */
    constructor() { 
        
        V1Termination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1Termination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1Termination} obj Optional instance to populate.
     * @return {module:model/V1Termination} The populated <code>V1Termination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1Termination();

            if (data.hasOwnProperty('max_retries')) {
                obj['max_retries'] = ApiClient.convertToType(data['max_retries'], 'Number');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} max_retries
 */
V1Termination.prototype['max_retries'] = undefined;

/**
 * @member {Number} ttl
 */
V1Termination.prototype['ttl'] = undefined;

/**
 * @member {Number} timeout
 */
V1Termination.prototype['timeout'] = undefined;






export default V1Termination;

