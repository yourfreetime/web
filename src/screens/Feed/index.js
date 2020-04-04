import React from 'react';
import { TextField, Button, Card } from '@material-ui/core';

import { useStyles } from './Feed.style';

import Container from 'components/Container';
import CardPost from 'containers/CardPost';

const FeedScreen = () => {
  const classes = useStyles();

  return (
    <Container>
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
      <CardPost />
      <CardPost />
      <CardPost />
      <CardPost />
    </Container>
  );
};

export default FeedScreen;
