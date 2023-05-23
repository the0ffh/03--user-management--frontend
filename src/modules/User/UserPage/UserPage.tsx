import { Page } from '../../core/Page/Page';
import { UserTable } from '../UserTable/UserTable';
import React from 'react';
import api from './api';
import { ReadUserDto } from '../../../../api';
import { FormDialog } from '../UserFormDialog/UserFormDialog';
import { makeStyles } from 'tss-react/mui';
import { Header } from '../../core/Header/Header';
import { Footer } from '../../core/Footer/Footer';

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
  const [refetch, setRefetch] = React.useState<boolean>(true);

  React.useEffect(() => {
    api
      .userControllerFindAll()
      .then(setUsers)
      .catch(console.error)
      .finally(() => {
        setRefetch(false);
      });
  }, [refetch]);

  const handleDelete = async (userId: number) => {
    await api.userControllerRemove({ id: userId });
    setRefetch(true);
  };
  return (
    <Page>
      <Header>
        <div className={classes.actionButtons}>
          <FormDialog
            onSubmit={() => {
              setRefetch(true);
            }}
          />
        </div>
      </Header>
      {users ? (
        <UserTable users={users} onDeleteClick={handleDelete} />
      ) : (
        <div>LOADING...</div>
      )}
      <Footer />
    </Page>
  );
};
