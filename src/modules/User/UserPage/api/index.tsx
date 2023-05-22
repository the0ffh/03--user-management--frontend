import { Configuration, UserApi } from '../../../../../api';
import { apiHost, apiPort } from '../../../../config.ts';

export default new UserApi(
  new Configuration({
    basePath: `${apiHost}:${apiPort}`,
  }),
);
