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
 * The version of the OpenAPI document: 1.0.90
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
import org.openapitools.client.model.V1EventChartKind;

/**
 * V1EventChart
 */

public class V1EventChart {
  public static final String SERIALIZED_NAME_KIND = "kind";
  @SerializedName(SERIALIZED_NAME_KIND)
  private V1EventChartKind kind = V1EventChartKind.PLOTLY;

  public static final String SERIALIZED_NAME_FIGURE = "figure";
  @SerializedName(SERIALIZED_NAME_FIGURE)
  private Object figure;


  public V1EventChart kind(V1EventChartKind kind) {
    
    this.kind = kind;
    return this;
  }

   /**
   * Get kind
   * @return kind
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public V1EventChartKind getKind() {
    return kind;
  }


  public void setKind(V1EventChartKind kind) {
    this.kind = kind;
  }


  public V1EventChart figure(Object figure) {
    
    this.figure = figure;
    return this;
  }

   /**
   * Get figure
   * @return figure
  **/
  @javax.annotation.Nullable
  @ApiModelProperty(value = "")

  public Object getFigure() {
    return figure;
  }


  public void setFigure(Object figure) {
    this.figure = figure;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    V1EventChart v1EventChart = (V1EventChart) o;
    return Objects.equals(this.kind, v1EventChart.kind) &&
        Objects.equals(this.figure, v1EventChart.figure);
  }

  @Override
  public int hashCode() {
    return Objects.hash(kind, figure);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class V1EventChart {\n");
    sb.append("    kind: ").append(toIndentedString(kind)).append("\n");
    sb.append("    figure: ").append(toIndentedString(figure)).append("\n");
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

