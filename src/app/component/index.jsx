import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { ListRoute } from './root.js';

class Root extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ListRoute/>
      </BrowserRouter>
    );
  }
}

export default Root;