import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { useStyles } from "./Main.style";

import FeedScreen from "../Feed";
import RadarScreen from "../Radar";
import UserScreen from "../User";

const MainScreen = () => {
  const classes = useStyles();

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
            <Route exact path="/" component={FeedScreen} />
            <Route exact path="/radar" component={RadarScreen} />
            <Route exact path="/me" component={UserScreen} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  );
};

export default MainScreen;
