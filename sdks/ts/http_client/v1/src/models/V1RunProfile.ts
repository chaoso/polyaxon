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

/* tslint:disable */
/* eslint-disable */
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
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface V1RunProfile
 */
export interface V1RunProfile {
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof V1RunProfile
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Date}
     * @memberof V1RunProfile
     */
    created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1RunProfile
     */
    updated_at?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof V1RunProfile
     */
    frozen?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V1RunProfile
     */
    disabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    agent?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    queue?: string;
    /**
     * 
     * @type {string}
     * @memberof V1RunProfile
     */
    namespace?: string;
    /**
     * 
     * @type {object}
     * @memberof V1RunProfile
     */
    termination?: object;
    /**
     * 
     * @type {object}
     * @memberof V1RunProfile
     */
    environment?: object;
}

export function V1RunProfileFromJSON(json: any): V1RunProfile {
    return V1RunProfileFromJSONTyped(json, false);
}

export function V1RunProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1RunProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'created_at': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updated_at': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'frozen': !exists(json, 'frozen') ? undefined : json['frozen'],
        'disabled': !exists(json, 'disabled') ? undefined : json['disabled'],
        'agent': !exists(json, 'agent') ? undefined : json['agent'],
        'queue': !exists(json, 'queue') ? undefined : json['queue'],
        'namespace': !exists(json, 'namespace') ? undefined : json['namespace'],
        'termination': !exists(json, 'termination') ? undefined : json['termination'],
        'environment': !exists(json, 'environment') ? undefined : json['environment'],
    };
}

export function V1RunProfileToJSON(value?: V1RunProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'description': value.description,
        'tags': value.tags,
        'created_at': value.created_at === undefined ? undefined : (value.created_at.toISOString()),
        'updated_at': value.updated_at === undefined ? undefined : (value.updated_at.toISOString()),
        'frozen': value.frozen,
        'disabled': value.disabled,
        'agent': value.agent,
        'queue': value.queue,
        'namespace': value.namespace,
        'termination': value.termination,
        'environment': value.environment,
    };
}


