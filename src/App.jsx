import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Routes from './routes.jsx';

const App = ({ store }) => (
  <div>
    <Provider store={store}>
      <Routes />
    </Provider>
  </div>
);

export default App;

App.propTypes = {
  store: PropTypes.object,
};
