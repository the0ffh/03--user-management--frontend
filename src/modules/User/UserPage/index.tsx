import { Page } from '../../core/Page';
import { UserTable } from '../UserTable';
import React from 'react';
import api from './api';
import { ReadUserDto } from '../../../../api';
import { FormDialog } from '../UserFormDialog';
import Button from '@mui/material/Button';
import { makeStyles } from 'tss-react/mui';
import { Header } from '../../core/Header';

const useStyles = makeStyles()(() => {
  return {
    actionButtons: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    spacer: {
      minWidth: 32,
    },
  };
});

export const UserPage: React.FunctionComponent = () => {
  const { classes } = useStyles();
  const [users, setUsers] = React.useState<ReadUserDto[]>();

  React.useEffect(() => {
    api.userControllerFindAll().then(setUsers).catch(console.error);
  }, [users]);

  const handleDelete = async (userId: number) => {
    await api.userControllerRemove({ id: userId });
  };

  return (
    <Page>
      <Header>
        <div className={classes.actionButtons}>
          <FormDialog />
          <div className={classes.spacer} />
          <Button variant="outlined">delete</Button>
        </div>
      </Header>
      {users ? (
        <UserTable users={users} onDeleteClick={handleDelete} />
      ) : (
        <div>LOADING...</div>
      )}
    </Page>
  );
};
