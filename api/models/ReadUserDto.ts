/* tslint:disable */
/* eslint-disable */
/**
 * User Management API
 * API docs
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ReadUserDto
 */
export interface ReadUserDto {
    /**
     * 
     * @type {string}
     * @memberof ReadUserDto
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof ReadUserDto
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof ReadUserDto
     */
    address: string;
    /**
     * 
     * @type {string}
     * @memberof ReadUserDto
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ReadUserDto
     */
    birthdate: string;
    /**
     * 
     * @type {number}
     * @memberof ReadUserDto
     */
    id: number;
}

/**
 * Check if a given object implements the ReadUserDto interface.
 */
export function instanceOfReadUserDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "address" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "birthdate" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function ReadUserDtoFromJSON(json: any): ReadUserDto {
    return ReadUserDtoFromJSONTyped(json, false);
}

export function ReadUserDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReadUserDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'address': json['address'],
        'email': json['email'],
        'birthdate': json['birthdate'],
        'id': json['id'],
    };
}

export function ReadUserDtoToJSON(value?: ReadUserDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'address': value.address,
        'email': value.email,
        'birthdate': value.birthdate,
        'id': value.id,
    };
}
