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

import ApiClient from '../ApiClient';
import V1BucketConnection from './V1BucketConnection';
import V1ClaimConnection from './V1ClaimConnection';
import V1GitConnection from './V1GitConnection';
import V1HostConnection from './V1HostConnection';
import V1HostPathConnection from './V1HostPathConnection';

/**
 * The V1ConnectionSchema model module.
 * @module model/V1ConnectionSchema
 * @version 1.4.4
 */
class V1ConnectionSchema {
    /**
     * Constructs a new <code>V1ConnectionSchema</code>.
     * @alias module:model/V1ConnectionSchema
     */
    constructor() { 
        
        V1ConnectionSchema.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1ConnectionSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ConnectionSchema} obj Optional instance to populate.
     * @return {module:model/V1ConnectionSchema} The populated <code>V1ConnectionSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ConnectionSchema();

            if (data.hasOwnProperty('bucket_connection')) {
                obj['bucket_connection'] = V1BucketConnection.constructFromObject(data['bucket_connection']);
            }
            if (data.hasOwnProperty('host_path_connection')) {
                obj['host_path_connection'] = V1HostPathConnection.constructFromObject(data['host_path_connection']);
            }
            if (data.hasOwnProperty('claim_connection')) {
                obj['claim_connection'] = V1ClaimConnection.constructFromObject(data['claim_connection']);
            }
            if (data.hasOwnProperty('host_connection')) {
                obj['host_connection'] = V1HostConnection.constructFromObject(data['host_connection']);
            }
            if (data.hasOwnProperty('git_connection')) {
                obj['git_connection'] = V1GitConnection.constructFromObject(data['git_connection']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1BucketConnection} bucket_connection
 */
V1ConnectionSchema.prototype['bucket_connection'] = undefined;

/**
 * @member {module:model/V1HostPathConnection} host_path_connection
 */
V1ConnectionSchema.prototype['host_path_connection'] = undefined;

/**
 * @member {module:model/V1ClaimConnection} claim_connection
 */
V1ConnectionSchema.prototype['claim_connection'] = undefined;

/**
 * @member {module:model/V1HostConnection} host_connection
 */
V1ConnectionSchema.prototype['host_connection'] = undefined;

/**
 * @member {module:model/V1GitConnection} git_connection
 */
V1ConnectionSchema.prototype['git_connection'] = undefined;






export default V1ConnectionSchema;

