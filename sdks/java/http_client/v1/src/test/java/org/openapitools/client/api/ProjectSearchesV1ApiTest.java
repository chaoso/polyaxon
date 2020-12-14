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

/*
 * Polyaxon SDKs and REST API specification.
 * Polyaxon SDKs and REST API specification.
 *
 * The version of the OpenAPI document: 1.4.4
 * Contact: contact@polyaxon.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.api;

import org.openapitools.client.ApiException;
import org.openapitools.client.model.RuntimeError;
import org.openapitools.client.model.V1ListSearchesResponse;
import org.openapitools.client.model.V1Search;
import org.junit.Test;
import org.junit.Ignore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ProjectSearchesV1Api
 */
@Ignore
public class ProjectSearchesV1ApiTest {

    private final ProjectSearchesV1Api api = new ProjectSearchesV1Api();

    
    /**
     * Create project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        V1Search body = null;
        V1Search response = api.createProjectSearch(owner, project, body);

        // TODO: test validations
    }
    
    /**
     * Delete project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteProjectSearchTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.deleteProjectSearch(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Get project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getProjectSearchTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        V1Search response = api.getProjectSearch(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * List project search names
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listProjectSearchNamesTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListSearchesResponse response = api.listProjectSearchNames(owner, name, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * List project searches
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void listProjectSearchesTest() throws ApiException {
        String owner = null;
        String name = null;
        Integer offset = null;
        Integer limit = null;
        String sort = null;
        String query = null;
        V1ListSearchesResponse response = api.listProjectSearches(owner, name, offset, limit, sort, query);

        // TODO: test validations
    }
    
    /**
     * Patch project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void patchProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.patchProjectSearch(owner, project, searchUuid, body);

        // TODO: test validations
    }
    
    /**
     * Promote project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void promoteProjectSearchTest() throws ApiException {
        String owner = null;
        String entity = null;
        String uuid = null;
        api.promoteProjectSearch(owner, entity, uuid);

        // TODO: test validations
    }
    
    /**
     * Update project search
     *
     * 
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateProjectSearchTest() throws ApiException {
        String owner = null;
        String project = null;
        String searchUuid = null;
        V1Search body = null;
        V1Search response = api.updateProjectSearch(owner, project, searchUuid, body);

        // TODO: test validations
    }
    
}
