import { Configuration, UserApi } from '../../../../../api';

/*TODO
 *  use EVN VAR!!!!
 */
export default new UserApi(
  new Configuration({ basePath: 'http://localhost:3000' }),
);
