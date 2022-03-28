import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CustomProvider } from 'rsuite';
import { Provider } from 'react-redux';

import store from './store/store';
import 'rsuite/dist/rsuite.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomProvider theme='light'>
        <App />
      </CustomProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
