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
export const CampaignType = {
    ConversationalService: 'CONVERSATIONAL_SERVICE'
} as const;
export type CampaignType = typeof CampaignType[keyof typeof CampaignType];


export function instanceOfCampaignType(value: any): boolean {
    return Object.values(CampaignType).includes(value);
}

export function CampaignTypeFromJSON(json: any): CampaignType {
    return CampaignTypeFromJSONTyped(json, false);
}

export function CampaignTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CampaignType {
    return json as CampaignType;
}

export function CampaignTypeToJSON(value?: CampaignType | null): any {
    return value as any;
}
