import { Footer } from '../Footer';
import { UserTable } from '../UserTable';
import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    header: {
      padding: theme.spacing(4, 5),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'end',
    },
    content: {
      margin: '0 auto 0 auto',
      flex: 1,
    },
  };
});

export const Page: React.FunctionComponent = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>'add new user button placeholder'</div>
      <div className={classes.content}>
        <UserTable />
      </div>
      <Footer />
    </div>
  );
};
