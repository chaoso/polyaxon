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


package org.openapitools.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * V1Iterative
 */

public class V1Iterative {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private String kind = "iterative";

  public static final String SERIALIZED_NAME_PARAMS = "params";
  @SerializedName(SERIALIZED_NAME_PARAMS)
  private Map<String, Object> params = null;

  public static final String SERIALIZED_NAME_MAX_ITERATIONS = "max_iterations";
  @SerializedName(SERIALIZED_NAME_MAX_ITERATIONS)
  private Integer maxIterations;

  public static final String SERIALIZED_NAME_SEED = "seed";
  @SerializedName(SERIALIZED_NAME_SEED)
  private Integer seed;

  public static final String SERIALIZED_NAME_CONCURRENCY = "concurrency";
  @SerializedName(SERIALIZED_NAME_CONCURRENCY)
  private Integer concurrency;

  public static final String SERIALIZED_NAME_CONTAINER = "container";
  @SerializedName(SERIALIZED_NAME_CONTAINER)
  private Object container;

  public static final String SERIALIZED_NAME_EARLY_STOPPING = "early_stopping";
  @SerializedName(SERIALIZED_NAME_EARLY_STOPPING)
  private List<Object> earlyStopping = null;


  public V1Iterative kind(String kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public String getKind() {
    return kind;
  }


  public void setKind(String kind) {
    this.kind = kind;
  }


  public V1Iterative params(Map<String, Object> params) {
    
    this.params = params;
    return this;
  }

  public V1Iterative putParamsItem(String key, Object paramsItem) {
    if (this.params == null) {
      this.params = new HashMap<String, Object>();
    }
    this.params.put(key, paramsItem);
    return this;
  }

   /**
   * Get params
   * @return params
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Map<String, Object> getParams() {
    return params;
  }


  public void setParams(Map<String, Object> params) {
    this.params = params;
  }


  public V1Iterative maxIterations(Integer maxIterations) {
    
    this.maxIterations = maxIterations;
    return this;
  }

   /**
   * Get maxIterations
   * @return maxIterations
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getMaxIterations() {
    return maxIterations;
  }


  public void setMaxIterations(Integer maxIterations) {
    this.maxIterations = maxIterations;
  }


  public V1Iterative seed(Integer seed) {
    
    this.seed = seed;
    return this;
  }

   /**
   * Get seed
   * @return seed
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getSeed() {
    return seed;
  }


  public void setSeed(Integer seed) {
    this.seed = seed;
  }


  public V1Iterative concurrency(Integer concurrency) {
    
    this.concurrency = concurrency;
    return this;
  }

   /**
   * Get concurrency
   * @return concurrency
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Integer getConcurrency() {
    return concurrency;
  }


  public void setConcurrency(Integer concurrency) {
    this.concurrency = concurrency;
  }


  public V1Iterative container(Object container) {
    
    this.container = container;
    return this;
  }

   /**
   * Get container
   * @return container
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getContainer() {
    return container;
  }


  public void setContainer(Object container) {
    this.container = container;
  }


  public V1Iterative earlyStopping(List<Object> earlyStopping) {
    
    this.earlyStopping = earlyStopping;
    return this;
  }

  public V1Iterative addEarlyStoppingItem(Object earlyStoppingItem) {
    if (this.earlyStopping == null) {
      this.earlyStopping = new ArrayList<Object>();
    }
    this.earlyStopping.add(earlyStoppingItem);
    return this;
  }

   /**
   * Get earlyStopping
   * @return earlyStopping
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public List<Object> getEarlyStopping() {
    return earlyStopping;
  }


  public void setEarlyStopping(List<Object> earlyStopping) {
    this.earlyStopping = earlyStopping;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1Iterative v1Iterative = (V1Iterative) o;
    return Objects.equals(this.kind, v1Iterative.kind) &&
        Objects.equals(this.params, v1Iterative.params) &&
        Objects.equals(this.maxIterations, v1Iterative.maxIterations) &&
        Objects.equals(this.seed, v1Iterative.seed) &&
        Objects.equals(this.concurrency, v1Iterative.concurrency) &&
        Objects.equals(this.container, v1Iterative.container) &&
        Objects.equals(this.earlyStopping, v1Iterative.earlyStopping);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, params, maxIterations, seed, concurrency, container, earlyStopping);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1Iterative {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    params: ").append(toIndentedString(params)).append("\n");
    sb.append("    maxIterations: ").append(toIndentedString(maxIterations)).append("\n");
    sb.append("    seed: ").append(toIndentedString(seed)).append("\n");
    sb.append("    concurrency: ").append(toIndentedString(concurrency)).append("\n");
    sb.append("    container: ").append(toIndentedString(container)).append("\n");
    sb.append("    earlyStopping: ").append(toIndentedString(earlyStopping)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

