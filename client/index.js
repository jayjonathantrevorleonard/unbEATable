import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

// So that webpack can bundle styles
import styles from './styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);