import React from "react";

import { Route, Switch } from "react-router-dom";
import Profile from "./modules";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Profile} />
  </Switch>
);
export default Routes;
