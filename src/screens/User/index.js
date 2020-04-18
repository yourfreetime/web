import React from 'react';
import { Card, Grid, Typography } from '@material-ui/core';

import Root from 'components/Root';
import CardPost from 'containers/CardPost';
import Count from './components/Count';

import { useStyles } from './User.style';

const UserScreen = () => {
  const classes = useStyles();

  return (
    <Root>
      <Card className={classes.rootUser}>
        <img
          alt="Usuário"
          className={classes.image}
          src="https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        />
        <Grid container spacing={5}>
          <Grid className={classes.description} item xs={12} md={5}>
            <Typography className={classes.username} variant="h1">
              Henrique Costa
            </Typography>
          </Grid>
          <Grid item xs={12} md={2} />
          <Grid className={classes.counts} item xs={12} md={5}>
            <Grid container>
              <Count />
              <Count />
              <Count />
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Root>
  );
};

export default UserScreen;
