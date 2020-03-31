import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import FeedScreen from "../screens/Feed";
import LoginScreen from "../screens/Login";
import RadarScreen from "../screens/Radar";
import UserScreen from "../screens/User";

const RoutesCore = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FeedScreen} />
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/radar" component={RadarScreen} />
      <Route exact path="/me" component={UserScreen} />
    </Switch>
  </BrowserRouter>
);

export default RoutesCore;
