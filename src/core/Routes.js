import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LoginScreen from "../screens/Login";
import MainScreen from "../screens/Main";

const RoutesCore = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginScreen} />
      <Route path="/" component={MainScreen} />
    </Switch>
  </BrowserRouter>
);

export default RoutesCore;
