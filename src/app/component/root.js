import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import App from './app.jsx';

export const ListRoute = ({ routerCommon }) => {
  return (
    <App>
      <Switch>
        <Route exact path="/" component={routerCommon.home} />
        <Route exact path="/not-found" component={routerCommon.notFound} />
        <Redirect to="/not-found" />
      </Switch>
    </App>
  )
};

export default ListRoute;