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
import type { CampaignManagement } from './CampaignManagement';
import {
    CampaignManagementFromJSON,
    CampaignManagementFromJSONTyped,
    CampaignManagementToJSON,
} from './CampaignManagement';
import type { EntityState } from './EntityState';
import {
    EntityStateFromJSON,
    EntityStateFromJSONTyped,
    EntityStateToJSON,
} from './EntityState';

/**
 * 
 * @export
 * @interface CampaignVO
 */
export interface CampaignVO {
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    label?: string;
    /**
     * 
     * @type {EntityState}
     * @memberof CampaignVO
     */
    state?: EntityState;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof CampaignVO
     */
    createdTs?: Date;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    dtsId?: string;
    /**
     * 
     * @type {CampaignManagement}
     * @memberof CampaignVO
     */
    management?: CampaignManagement;
    /**
     * 
     * @type {Date}
     * @memberof CampaignVO
     */
    runFromTs?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CampaignVO
     */
    runUntilTs?: Date;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    yaml?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    todaySent?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    todayDelivered?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    todayViewed?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    todayCtr?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    allTimeSent?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    allTimeDelivered?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    allTimeViewed?: string;
    /**
     * 
     * @type {string}
     * @memberof CampaignVO
     */
    allTimeCtr?: string;
    /**
     * 
     * @type {number}
     * @memberof CampaignVO
     */
    todayEfficiency?: number;
    /**
     * 
     * @type {number}
     * @memberof CampaignVO
     */
    allTimeEfficiency?: number;
    /**
     * 
     * @type {Array<EntityState>}
     * @memberof CampaignVO
     */
    allowedTransitionStates?: Array<EntityState>;
}

/**
 * Check if a given object implements the CampaignVO interface.
 */
export function instanceOfCampaignVO(value: object): boolean {
    return true;
}

export function CampaignVOFromJSON(json: any): CampaignVO {
    return CampaignVOFromJSONTyped(json, false);
}

export function CampaignVOFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignVO {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'label': json['label'] == null ? undefined : json['label'],
        'state': json['state'] == null ? undefined : EntityStateFromJSON(json['state']),
        'id': json['id'] == null ? undefined : json['id'],
        'createdTs': json['createdTs'] == null ? undefined : (new Date(json['createdTs'])),
        'name': json['name'] == null ? undefined : json['name'],
        'dtsId': json['dtsId'] == null ? undefined : json['dtsId'],
        'management': json['management'] == null ? undefined : CampaignManagementFromJSON(json['management']),
        'runFromTs': json['runFromTs'] == null ? undefined : (new Date(json['runFromTs'])),
        'runUntilTs': json['runUntilTs'] == null ? undefined : (new Date(json['runUntilTs'])),
        'yaml': json['yaml'] == null ? undefined : json['yaml'],
        'todaySent': json['todaySent'] == null ? undefined : json['todaySent'],
        'todayDelivered': json['todayDelivered'] == null ? undefined : json['todayDelivered'],
        'todayViewed': json['todayViewed'] == null ? undefined : json['todayViewed'],
        'todayCtr': json['todayCtr'] == null ? undefined : json['todayCtr'],
        'allTimeSent': json['allTimeSent'] == null ? undefined : json['allTimeSent'],
        'allTimeDelivered': json['allTimeDelivered'] == null ? undefined : json['allTimeDelivered'],
        'allTimeViewed': json['allTimeViewed'] == null ? undefined : json['allTimeViewed'],
        'allTimeCtr': json['allTimeCtr'] == null ? undefined : json['allTimeCtr'],
        'todayEfficiency': json['todayEfficiency'] == null ? undefined : json['todayEfficiency'],
        'allTimeEfficiency': json['allTimeEfficiency'] == null ? undefined : json['allTimeEfficiency'],
        'allowedTransitionStates': json['allowedTransitionStates'] == null ? undefined : ((json['allowedTransitionStates'] as Array<any>).map(EntityStateFromJSON)),
    };
}

export function CampaignVOToJSON(value?: CampaignVO | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'label': value['label'],
        'state': EntityStateToJSON(value['state']),
        'id': value['id'],
        'createdTs': value['createdTs'] == null ? undefined : ((value['createdTs']).toISOString()),
        'name': value['name'],
        'dtsId': value['dtsId'],
        'management': CampaignManagementToJSON(value['management']),
        'runFromTs': value['runFromTs'] == null ? undefined : ((value['runFromTs']).toISOString()),
        'runUntilTs': value['runUntilTs'] == null ? undefined : ((value['runUntilTs']).toISOString()),
        'yaml': value['yaml'],
        'todaySent': value['todaySent'],
        'todayDelivered': value['todayDelivered'],
        'todayViewed': value['todayViewed'],
        'todayCtr': value['todayCtr'],
        'allTimeSent': value['allTimeSent'],
        'allTimeDelivered': value['allTimeDelivered'],
        'allTimeViewed': value['allTimeViewed'],
        'allTimeCtr': value['allTimeCtr'],
        'todayEfficiency': value['todayEfficiency'],
        'allTimeEfficiency': value['allTimeEfficiency'],
        'allowedTransitionStates': value['allowedTransitionStates'] == null ? undefined : ((value['allowedTransitionStates'] as Array<any>).map(EntityStateToJSON)),
    };
}

