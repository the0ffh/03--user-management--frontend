FROM node:18.16-alpine3.17 AS build

WORKDIR /app

COPY public/ ./public/
COPY api/ ./api/
COPY src/ ./src/
COPY .yarnrc.yml ./
COPY index.html ./
COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig.node.json ./
COPY vite.config.ts ./
COPY yarn.lock ./
COPY run.sh ./

RUN ls -al
#ENV YARN_NODE_LINKER=node-modules
RUN yarn install --silent --immutable

EXPOSE 8080
ENTRYPOINT ["./run.sh"]
