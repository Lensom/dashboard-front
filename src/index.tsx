import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import theme from 'theme';

import { CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource-variable/public-sans';

import App from './App';

import './styles/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
