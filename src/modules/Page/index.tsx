import { Footer } from '../Footer';
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

    content: {
      margin: '0 auto 0 auto',
      flex: 1,
    },
  };
});

interface Props {
  children?: React.ReactNode;
}

export const Page: React.FunctionComponent<Props> = ({ children }) => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.content}>{children}</div>
      <Footer />
    </div>
  );
};
