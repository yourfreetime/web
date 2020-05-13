import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import { useStyles } from './Main.style';

import FeedScreen from 'screens/Feed';
import RadarScreen from 'screens/Radar';
import UserScreen from 'screens/User';
import PostScreen from 'screens/Post';

import { IMAGE_DEFAULT } from 'core/constants';

const MainScreen = ({ history }) => {
  const classes = useStyles();

  useEffect(() => {
    if (!localStorage.getItem('yourfreetime@token')) {
      history.push('/login');
    }
  }, [history]);

  const currentUser = JSON.parse(localStorage.getItem('yourfreetime@user'));

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
            <Route exact path="/" component={FeedScreen} />
            <Route exact path="/radar" component={RadarScreen} />
            <Route exact path="/post/:id" component={PostScreen} />
            <Route exact path="/user/:id" component={UserScreen} />
            <Route exact path="/me" component={UserScreen} />
          </Switch>
        </div>
      </>
    </BrowserRouter>
  );
};

export default MainScreen;
