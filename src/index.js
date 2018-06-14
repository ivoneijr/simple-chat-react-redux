/* global document */
import React from 'react';
import { render } from 'react-dom';

import store from './stores/redux_store';
import App from './App.jsx';

import './style/main.less';

const appElement = document.getElementById('app');
if (appElement) {
  render(<App store={store}/>, appElement);
}

