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
 * The version of the OpenAPI document: 1.2.1-rc2
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
 * @interface V1CronSchedule
 */
export interface V1CronSchedule {
    /**
     * 
     * @type {string}
     * @memberof V1CronSchedule
     */
    kind?: string;
    /**
     * 
     * @type {Date}
     * @memberof V1CronSchedule
     */
    start_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V1CronSchedule
     */
    end_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof V1CronSchedule
     */
    cron?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V1CronSchedule
     */
    depends_on_past?: boolean;
}

export function V1CronScheduleFromJSON(json: any): V1CronSchedule {
    return V1CronScheduleFromJSONTyped(json, false);
}

export function V1CronScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CronSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'kind': !exists(json, 'kind') ? undefined : json['kind'],
        'start_at': !exists(json, 'start_at') ? undefined : (new Date(json['start_at'])),
        'end_at': !exists(json, 'end_at') ? undefined : (new Date(json['end_at'])),
        'cron': !exists(json, 'cron') ? undefined : json['cron'],
        'depends_on_past': !exists(json, 'depends_on_past') ? undefined : json['depends_on_past'],
    };
}

export function V1CronScheduleToJSON(value?: V1CronSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'kind': value.kind,
        'start_at': value.start_at === undefined ? undefined : (value.start_at.toISOString()),
        'end_at': value.end_at === undefined ? undefined : (value.end_at.toISOString()),
        'cron': value.cron,
        'depends_on_past': value.depends_on_past,
    };
}


