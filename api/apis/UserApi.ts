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


import * as runtime from '../runtime';
import type {
  CreateUserDto,
  ReadUserDto,
  UpdateUserDto,
} from '../models';
import {
    CreateUserDtoFromJSON,
    CreateUserDtoToJSON,
    ReadUserDtoFromJSON,
    ReadUserDtoToJSON,
    UpdateUserDtoFromJSON,
    UpdateUserDtoToJSON,
} from '../models';

export interface UserApiUserControllerCreateRequest {
    createUserDto: CreateUserDto;
}

export interface UserApiUserControllerFindOneRequest {
    id: number;
}

export interface UserApiUserControllerRemoveRequest {
    id: number;
}

export interface UserApiUserControllerUpdateRequest {
    id: number;
    updateUserDto: UpdateUserDto;
}

/**
 * UserApi - interface
 * 
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * 
     * @param {CreateUserDto} createUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerCreateRaw(requestParameters: UserApiUserControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    userControllerCreate(requestParameters: UserApiUserControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ReadUserDto>>>;

    /**
     */
    userControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ReadUserDto>>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerFindOneRaw(requestParameters: UserApiUserControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReadUserDto>>;

    /**
     */
    userControllerFindOne(requestParameters: UserApiUserControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReadUserDto>;

    /**
     * 
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerRemoveRaw(requestParameters: UserApiUserControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    userControllerRemove(requestParameters: UserApiUserControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @param {number} id 
     * @param {UpdateUserDto} updateUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    userControllerUpdateRaw(requestParameters: UserApiUserControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     */
    userControllerUpdate(requestParameters: UserApiUserControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {

    /**
     */
    async userControllerCreateRaw(requestParameters: UserApiUserControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createUserDto === null || requestParameters.createUserDto === undefined) {
            throw new runtime.RequiredError('createUserDto','Required parameter requestParameters.createUserDto was null or undefined when calling userControllerCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateUserDtoToJSON(requestParameters.createUserDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userControllerCreate(requestParameters: UserApiUserControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userControllerCreateRaw(requestParameters, initOverrides);
    }

    /**
     */
    async userControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ReadUserDto>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ReadUserDtoFromJSON));
    }

    /**
     */
    async userControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ReadUserDto>> {
        const response = await this.userControllerFindAllRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async userControllerFindOneRaw(requestParameters: UserApiUserControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReadUserDto>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userControllerFindOne.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReadUserDtoFromJSON(jsonValue));
    }

    /**
     */
    async userControllerFindOne(requestParameters: UserApiUserControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReadUserDto> {
        const response = await this.userControllerFindOneRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userControllerRemoveRaw(requestParameters: UserApiUserControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userControllerRemove.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userControllerRemove(requestParameters: UserApiUserControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userControllerRemoveRaw(requestParameters, initOverrides);
    }

    /**
     */
    async userControllerUpdateRaw(requestParameters: UserApiUserControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling userControllerUpdate.');
        }

        if (requestParameters.updateUserDto === null || requestParameters.updateUserDto === undefined) {
            throw new runtime.RequiredError('updateUserDto','Required parameter requestParameters.updateUserDto was null or undefined when calling userControllerUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateUserDtoToJSON(requestParameters.updateUserDto),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userControllerUpdate(requestParameters: UserApiUserControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userControllerUpdateRaw(requestParameters, initOverrides);
    }

}