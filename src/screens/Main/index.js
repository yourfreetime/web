import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './Main.style';
import firebase from 'firebase/app';

import { getCurrentUser } from 'services/user';

import FeedScreen from 'screens/Feed';
import RadarScreen from 'screens/Radar';
import UserScreen from 'screens/User';

const MainScreen = ({ history }) => {
  const classes = useStyles();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        getCurrentUser(user => setCurrentUser(user));
      } else {
        history.push('/login');
      }
    });
  }, [history]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.navBar}>
          <img
            alt="Logo do YourFreeTime"
            src="/assets/logo-horizontal.png"
            className={classes.logo}
          />
          <div style={{ flex: 1 }} />
          <img
            alt="Imagem do usuário"
            src="https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
            className={classes.userImage}
          />
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <FeedScreen currentUser={currentUser} {...props} />
              )}
            />
            <Route exact path="/radar" component={RadarScreen} />
            <Route exact path="/me" component={UserScreen} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainScreen;
