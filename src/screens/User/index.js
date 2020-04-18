import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';

import { useStyles } from './User.style';

import Card from 'components/Card';
import Root from 'components/Root';
import CardPost from 'containers/CardPost';
import Count from './components/Count';
import Loader from 'components/Loader';

import { allPostsByUser } from 'services/post';
import { getUser } from 'services/user';

const UserScreen = ({ match, currentUser }) => {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    let unsubscribe;

    const getData = async () => {
      if (match.params.id || currentUser) {
        const userId =
          match && match.params.id ? match.params.id : currentUser.id;

        unsubscribe = allPostsByUser(userId, posts => {
          setPosts(posts);
        });

        const userData = await getUser(userId);
        setUser({ ...userData.data(), id: userData.uid });
        setLoading(false);
      }
    };

    getData();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [currentUser, match]);

  if (loading) {
    return <Loader />;
  }

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
              <Count title="Publicações" count={posts.length} />
              <Count title="Salvos" count={0} />
              <Count title="Seguidores" count={0} />
            </Grid>
          </Grid>
        </Grid>
      </Card>
      {posts.map(item => (
        <CardPost key={item.id} post={item} currentUser={currentUser} />
      ))}
    </Root>
  );
};

export default UserScreen;
