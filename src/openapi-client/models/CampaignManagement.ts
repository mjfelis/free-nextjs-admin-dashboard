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


/**
 * 
 * @export
 */
export const CampaignManagement = {
    Permanent: 'PERMANENT',
    Triggered: 'TRIGGERED',
    Scheduled: 'SCHEDULED',
    Api: 'API'
} as const;
export type CampaignManagement = typeof CampaignManagement[keyof typeof CampaignManagement];


export function instanceOfCampaignManagement(value: any): boolean {
    return Object.values(CampaignManagement).includes(value);
}

export function CampaignManagementFromJSON(json: any): CampaignManagement {
    return CampaignManagementFromJSONTyped(json, false);
}

export function CampaignManagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignManagement {
    return json as CampaignManagement;
}

export function CampaignManagementToJSON(value?: CampaignManagement | null): any {
    return value as any;
}

