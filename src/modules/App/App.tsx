import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { CssBaseline } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { UserPage } from '../UserPage';

/*
 * mui tss react
 * https://mui.com/material-ui/migration/migrating-from-jss/#2-use-tss-react
 * */

const useStyles = makeStyles()((theme) => {
  return {
    root: {
      color: theme.palette.primary.main,
      minHeight: '100vh',
      flexDirection: 'column',
      display: 'flex',
    },
  };
});

const App: React.FunctionComponent = () => {
  const { classes } = useStyles();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <UserPage />
        </div>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
