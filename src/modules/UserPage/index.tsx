import { Page } from '../Page';
import { UserTable } from '../UserTable';
import React from 'react';
import api from './api';
import { ReadUserDto } from '../../../api';
import { FabAdd } from '../FabAdd';
import { FabEdit } from '../FabEdit';
import { FormDialog } from '../FormDialog';

export const UserPage: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<ReadUserDto[]>();

  React.useEffect(() => {
    const fetchUsers = async () => {
      const result = await api.userControllerFindAll();
      setUsers(result);
    };

    fetchUsers();
  }, [users]);

  return (
    <Page>
      <FormDialog />
      {users ? <UserTable users={users} /> : <div>LOADING...</div>}
    </Page>
  );
};