import React from 'react';
import { Route, Switch } from "react-router-dom";
import App from './app.jsx';
import Home from './home/route.jsx';
import About from './about/route.jsx';
import NotFound from './share/notFound.jsx';

export const ListRoute = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="*" component={NotFound} />
    </Switch>
  </App>
);

export default ListRoute;