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

from hashlib import md5 as _md5
from hashlib import sha1 as _sha1

try:
    from django.utils.encoding import force_bytes
except ImportError:
    raise ImportError("This module depends on django.")


def md5_text(*args):
    m = _md5()
    for x in args:
        m.update(force_bytes(x, errors="replace"))
    return m


def sha1_text(*args):
    m = _sha1()
    for x in args:
        m.update(force_bytes(x, errors="replace"))
    return m