import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './Main.style';
import firebase from 'firebase/app';

import { getCurrentUser } from 'services/user';

import FeedScreen from 'screens/Feed';
import RadarScreen from 'screens/Radar';
import UserScreen from 'screens/User';
import PostScreen from 'screens/Post';

import { IMAGE_DEFAULT } from 'core/constants';

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
    <BrowserRouter>
      <>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.navBar}>
            <Link to="/">
              <img
                alt="Logo do YourFreeTime"
                src="/assets/logo-horizontal.png"
                className={classes.logo}
              />
            </Link>
            <div style={{ flex: 1 }} />
            <Link to="/me">
              <img
                alt={`Imagem do ${
                  currentUser ? currentUser.picture : 'usuário'
                }`}
                src={currentUser ? currentUser.picture : IMAGE_DEFAULT}
                className={classes.userImage}
              />
            </Link>
          </Toolbar>
        </AppBar>
        <div className={classes.root}>
          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <FeedScreen currentUser={currentUser} {...props} />
              )}
            />
            <Route exact path="/radar" component={RadarScreen} />
            <Route
              exact
              path="/post/:id"
              component={props => (
                <PostScreen currentUser={currentUser} {...props} />
              )}
            />
            <Route
              exact
              path="/user/:id"
              component={props => (
                <UserScreen currentUser={currentUser} {...props} />
              )}
            />
            <Route
              exact
              path="/me"
              component={props => (
                <UserScreen currentUser={currentUser} {...props} />
              )}
            />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};

export default MainScreen;
