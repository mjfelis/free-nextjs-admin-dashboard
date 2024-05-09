/* tslint:disable */
/* eslint-disable */
/**
 * orchestrator-backend API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ParameterType } from './ParameterType';
import {
    ParameterTypeFromJSON,
    ParameterTypeFromJSONTyped,
    ParameterTypeToJSON,
} from './ParameterType';

/**
 * 
 * @export
 * @interface ParameterFilter
 */
export interface ParameterFilter {
    /**
     * 
     * @type {string}
     * @memberof ParameterFilter
     */
    name?: string;
    /**
     * 
     * @type {ParameterType}
     * @memberof ParameterFilter
     */
    type?: ParameterType;
    /**
     * 
     * @type {string}
     * @memberof ParameterFilter
     */
    searchAttribute?: string;
}

/**
 * Check if a given object implements the ParameterFilter interface.
 */
export function instanceOfParameterFilter(value: object): boolean {
    return true;
}

export function ParameterFilterFromJSON(json: any): ParameterFilter {
    return ParameterFilterFromJSONTyped(json, false);
}

export function ParameterFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParameterFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'] == null ? undefined : json['name'],
        'type': json['type'] == null ? undefined : ParameterTypeFromJSON(json['type']),
        'searchAttribute': json['searchAttribute'] == null ? undefined : json['searchAttribute'],
    };
}

export function ParameterFilterToJSON(value?: ParameterFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'type': ParameterTypeToJSON(value['type']),
        'searchAttribute': value['searchAttribute'],
    };
}

