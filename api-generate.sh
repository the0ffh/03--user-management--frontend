#!/usr/bin/env bash

export $(grep -v '^#' .env | xargs -0)

rm -rf api && \
mkdir api && \
docker run --rm \
-v "${PWD}"/api:/local \
openapitools/openapi-generator-cli \
generate \
-i "${OPENAPI_HOST}:${OPENAPI_PORT}/${OPENAPI_PATH}"\
-g typescript-fetch \
--additional-properties=prefixParameterInterfaces=true,typescriptThreePlus=true,withInterfaces=true,enumPropertyNaming=UPPERCASE,removeEnumValuePrefix=false \
-o ./local
