import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ListRoute } from './root.js';
import configStore from '../store/index.js';

class Root extends React.Component {
  render() {
    let store = configStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <ListRoute/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;