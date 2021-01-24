import React from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Work from "./Work";
import WeekendWork from "./WeekendWork";
import Skills from "./Skills";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/blogs" component={Blogs} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/weekend-work" component={WeekendWork} />
    <Route exact path="/skills" component={Skills} />
  </Switch>
);
export default Routes;
