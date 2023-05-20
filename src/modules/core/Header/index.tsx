import React from 'react';
import { makeStyles } from 'tss-react/mui';

interface Props {
  children?: React.ReactNode;
}

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      padding: theme.spacing(4, 0),
      display: 'flex',
      justifyContent: 'end',
    },
  };
});

export const Header: React.FunctionComponent<Props> = ({ children }) => {
  const { classes } = useStyles();

  return <div className={classes.root}>{children}</div>;
};
