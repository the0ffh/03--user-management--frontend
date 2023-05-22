# 03--user-management--frontend

## Important!!
Export `YARN_NODE_LINKER=node-modules` before any invocation of `yarn install/remove`

e.g.
```bash
export YARN_NODE_LINKER=node-modules
```

Reason - used `typescript` version is still to be patched in order to use with `pnp`

## Set up local dev
Clone backend repository https://github.com/the0ffh/03--user-management--backend.

Do use `dev` branch in both repos

- start backend (from within backend repo:)
  - `docker compose up database -d`
  - `yarn`
  - `yarn start:dev`
  - or (containerized backend)
  - `docker compose up -d`
- start frontend (from within frontend repo:)
  - `yarn`
  - `yarn start:dev`
  - or (containerized)
  - `docker compose up -d`

Frontend is accessible under `localhost:8080`


### Environment variables

ref: [.env](.env)

```dotenv
VITE_API_HOST:  backend address
VITE_API_PORT:  backend port
VITE_PORT:      frontend port, defaults to 5172

# needed to generate api
# ref: https://openapi-generator.tech/
OPENAPI_HOST:   backend address, accessible from docker, maps to host
OPENAPI_PORT:   backend openapi port
OPENAPI_PATH:   backend openapi path
```


## Misc

### API update

Repopulates [api](api) dir using dockerized openapi generator  
(using generator outside docker require java to be installed on dev machine)

ref: https://openapi-generator.tech/

Execute after modifying backend

```bash
yarn api:generate
```


### Notes
frontend testing suite does not come to live as of now
