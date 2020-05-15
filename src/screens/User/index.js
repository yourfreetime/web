import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_DETAILS } from 'yourfreetime/queries';

import { useStyles } from './User.style';

import Card from 'components/Card';
import Root from 'components/Root';
import CardPost from 'containers/CardPost';
import Count from './components/Count';
import Loader from 'components/Loader';

import { readCurrentUser } from 'core/constants';

const getUserId = match => {
  const currentUserId = readCurrentUser()._id;
  return match && match.params.id ? match.params.id : currentUserId;
};

const UserScreen = ({ match }) => {
  const classes = useStyles();
  const { loading, data } = useQuery(GET_USER_DETAILS, {
    variables: { userId: getUserId(match) }
  });

  if (loading) {
    return <Loader />;
  }

  const user = data.getUser;

  return (
    <Root>
      <Card className={classes.rootUser}>
        <img
          alt={`Imagem de ${user.name}`}
          className={classes.image}
          src={user.picture}
        />
        <Grid container spacing={5}>
          <Grid className={classes.description} item xs={12} sm={5}>
            <Typography className={classes.username} variant="h1">
              {user.name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={2} />
          <Grid className={classes.counts} item xs={12} sm={5}>
            <Grid container>
              <Count title="Publicações" count={data.listPosts.length} />
              <Count title="Salvos" count={user.savedPosts.length} />
              <Count title="Seguidores" count={data.listFollowers.length} />
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {data.listPosts.map(item => (
        <CardPost key={item.id} post={item} />
      ))}
    </Root>
  );
};

export default UserScreen;
