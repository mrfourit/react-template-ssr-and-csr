import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ListRoute } from './root.js';
import configStore from '../store/index.js';
import history from '../history.js';
import routerClient from './routerClient';

class Root extends React.Component {
  render() {
    let store = configStore();

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Router history={history}>
            <ListRoute routerCommon={routerClient} />
          </Router>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default Root;