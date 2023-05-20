# obi--03--user-management--frontend

# important!!
Export `YARN_NODE_LINKER=node-modules` before any invocation of `yarn install/remove`

e.g.
```bash
export YARN_NODE_LINKER=node-modules
```

Reason - `typescript` version used is not patched yet for use with `pnp` yet

# set up local dev
```bash
yarn

yarn start:dev
```

## update api
repopulates [api](api) dir
ref: https://openapi-generator.tech/

```bash
yarn api:generate
```
