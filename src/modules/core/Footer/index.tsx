import React from 'react';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      flexDirection: 'column',
      display: 'flex',
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      padding: theme.spacing(2, 3),
    },
  };
});

export const Footer: React.FunctionComponent = () => {
  const { classes } = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.content}>
        &copy; {new Date().getUTCFullYear()} the0ffh
      </div>
    </footer>
  );
};
