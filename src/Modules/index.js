import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Skills from "./Skills";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
);
export default Routes;
