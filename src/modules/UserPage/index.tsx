import { Page } from '../Page';
import { UserTable } from '../UserTable';
import React from 'react';
import api from './api';
import { ReadUserDto } from '../../../api';

export const UserPage: React.FunctionComponent = () => {
  const [users, setUsers] = React.useState<ReadUserDto[]>();

  React.useEffect(() => {
    const fetchUsers = async () => {
      const result = await api.userControllerFindAll();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  return (
    <Page>{users ? <UserTable users={users} /> : <div>LOADING...</div>}</Page>
  );
};
