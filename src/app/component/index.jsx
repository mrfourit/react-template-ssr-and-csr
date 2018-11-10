import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ListRoute } from './root.js';
import configStore from '../store/index.js';
import history from '../history.js';

class Root extends React.Component {
  render() {
    let store = configStore();

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            <ListRoute/>
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;