import { Configuration, UserApi } from '../../../../../api';

console.log(
  `import.meta.env.API_HOST}${JSON.stringify(import.meta.env, null, 2)}}`,
);
export default new UserApi(
  new Configuration({
    basePath: `${import.meta.env.VITE_API_HOST}:${
      import.meta.env.VITE_API_PORT
    }`,
  }),
);
