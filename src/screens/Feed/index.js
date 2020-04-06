import React, { useEffect, useState } from 'react';
import { TextField, Button, Card } from '@material-ui/core';

import { useStyles } from './Feed.style';

import Root from 'components/Root';
import CardPost from 'containers/CardPost';

import { getPost } from 'services/post';

const FeedScreen = () => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPost(posts => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  return (
    <Root>
      <Card className={classes.rootCreatePost}>
        <img
          alt="Usuário"
          className={classes.image}
          src="https://www.driver-project.eu/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png"
        />
        <form className={classes.postForm}>
          <TextField
            id="email"
            name="email"
            label="O que você está fazendo no seu tempo livre?"
            variant="outlined"
            placeholder="O que você está fazendo no seu tempo livre?"
            fullWidth
            multiline
            rowsMax={5}
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
          >
            Publicar
          </Button>
        </form>
      </Card>
      {posts.map(item => (
        <CardPost key={item.id} post={item} />
      ))}
    </Root>
  );
};

export default FeedScreen;
