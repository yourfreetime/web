import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginScreen from 'screens/Login';
import MainScreen from 'screens/Main';
import RegisterScreen from 'screens/Register';

const RoutesCore = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={RegisterScreen} />
        <Route path="/" component={MainScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default RoutesCore;
