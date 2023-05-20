# obi--03--user-management--frontend

# important!!
Export `YARN_NODE_LINKER=node-modules` before any invocation of `yarn install/remove`

e.g.
```bash
export YARN_NODE_LINKER=node-modules
```

Reason - `typescript` version used is not patched yet for use with `pnp` yet

# set up local dev

clone backend repository and follow set up instructions, ref: https://github.com/the0ffh/03--user-management--backend  
(spin up necessary container(s) and web server)

(use `dev` branch in both repos)

Execute the following in the current repo:
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


# misc
please do note: 
> backend e2e testing suite is still a broken work in progress  
> frontend testing suite does not come to live as of now
