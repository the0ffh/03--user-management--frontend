import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './modules/App/App.tsx';
import './index.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from './modules/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
