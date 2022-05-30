import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
