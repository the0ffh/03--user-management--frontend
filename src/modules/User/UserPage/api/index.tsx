import { Configuration, UserApi } from '../../../../../api';

export default new UserApi(
  new Configuration({
    basePath: `${import.meta.env.VITE_API_HOST}:${
      import.meta.env.VITE_API_PORT
    }`,
  }),
);
