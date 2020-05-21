#!/usr/bin/python
#
# Copyright 2018-2020 Polyaxon, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#      http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# coding: utf-8

"""
    Polyaxon SDKs and REST API specification.

    Polyaxon SDKs and REST API specification.  # noqa: E501

    The version of the OpenAPI document: 1.0.90
    Contact: contact@polyaxon.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from polyaxon_sdk.configuration import Configuration


class V1EventHistogram(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {"values": "list[float]", "counts": "list[float]"}

    attribute_map = {"values": "values", "counts": "counts"}

    def __init__(
        self, values=None, counts=None, local_vars_configuration=None
    ):  # noqa: E501
        """V1EventHistogram - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._values = None
        self._counts = None
        self.discriminator = None

        if values is not None:
            self.values = values
        if counts is not None:
            self.counts = counts

    @property
    def values(self):
        """Gets the values of this V1EventHistogram.  # noqa: E501


        :return: The values of this V1EventHistogram.  # noqa: E501
        :rtype: list[float]
        """
        return self._values

    @values.setter
    def values(self, values):
        """Sets the values of this V1EventHistogram.


        :param values: The values of this V1EventHistogram.  # noqa: E501
        :type: list[float]
        """

        self._values = values

    @property
    def counts(self):
        """Gets the counts of this V1EventHistogram.  # noqa: E501


        :return: The counts of this V1EventHistogram.  # noqa: E501
        :rtype: list[float]
        """
        return self._counts

    @counts.setter
    def counts(self, counts):
        """Sets the counts of this V1EventHistogram.


        :param counts: The counts of this V1EventHistogram.  # noqa: E501
        :type: list[float]
        """

        self._counts = counts

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(
                    map(lambda x: x.to_dict() if hasattr(x, "to_dict") else x, value)
                )
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(
                    map(
                        lambda item: (item[0], item[1].to_dict())
                        if hasattr(item[1], "to_dict")
                        else item,
                        value.items(),
                    )
                )
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, V1EventHistogram):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, V1EventHistogram):
            return True

        return self.to_dict() != other.to_dict()
