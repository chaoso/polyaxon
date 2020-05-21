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
import AgentStateResponseAgentState from './AgentStateResponseAgentState';
import V1Statuses from './V1Statuses';

/**
 * The V1AgentStateResponse model module.
 * @module model/V1AgentStateResponse
 * @version 1.0.90
 */
class V1AgentStateResponse {
    /**
     * Constructs a new <code>V1AgentStateResponse</code>.
     * @alias module:model/V1AgentStateResponse
     */
    constructor() { 
        
        V1AgentStateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1AgentStateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1AgentStateResponse} obj Optional instance to populate.
     * @return {module:model/V1AgentStateResponse} The populated <code>V1AgentStateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1AgentStateResponse();

            if (data.hasOwnProperty('status')) {
                obj['status'] = V1Statuses.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = AgentStateResponseAgentState.constructFromObject(data['state']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/V1Statuses} status
 */
V1AgentStateResponse.prototype['status'] = undefined;

/**
 * @member {module:model/AgentStateResponseAgentState} state
 */
V1AgentStateResponse.prototype['state'] = undefined;






export default V1AgentStateResponse;

