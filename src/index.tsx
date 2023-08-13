import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import '@fontsource-variable/public-sans';

import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: 'Public Sans Variable',
  },
});

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
