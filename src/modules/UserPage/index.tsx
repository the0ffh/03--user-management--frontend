import { Page } from '../Page';
import { UserTable } from '../UserTable';
import React from 'react';
import api from './api';
import { ReadUserDto } from '../../../api';
import { FabAdd } from '../FabAdd';
import { FabEdit } from '../FabEdit';

export const UserPage: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<ReadUserDto[]>();

  React.useEffect(() => {
    const fetchUsers = async () => {
      const result = await api.userControllerFindAll();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  const handleButtonClick = (message: string) => {
    alert(message);
  };

  return (
    <Page>
      <FabAdd onClick={() => handleButtonClick('add')} />
      <FabEdit onClick={() => handleButtonClick('edit')} />
      {users ? <UserTable users={users} /> : <div>LOADING...</div>}
    </Page>
  );
};
