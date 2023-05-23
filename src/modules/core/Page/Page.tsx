import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      display: 'flex',
      minHeight: '100vh',
    },
    content: {
      margin: '0 auto 0 auto',
      display: 'flex',
      flexDirection: 'column',
      flex: '0 1 auto',
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
    </div>
  );
};
