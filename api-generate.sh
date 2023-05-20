#!/usr/bin/env bash

rm -rf api && \
mkdir api && \
docker run --rm \
-v ${PWD}/api:/local \
openapitools/openapi-generator-cli \
generate \
-i http://host.docker.internal:3000/openapi \
-g typescript-fetch \
--additional-properties=prefixParameterInterfaces=true,typescriptThreePlus=true,withInterfaces=true,enumPropertyNaming=UPPERCASE,removeEnumValuePrefix=false \
-o ./local
