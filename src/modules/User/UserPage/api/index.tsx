import { Configuration, UserApi } from '../../../../../api';
import { apiHost, apiPort } from '../../../../config';

export default new UserApi(
  new Configuration({
    basePath: `${apiHost}:${apiPort}`,
  }),
);
