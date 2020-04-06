import React, { useState } from 'react';
import { TextField, Button, Card } from '@material-ui/core';
import firebase from 'firebase';

import { useStyles } from './CreatePost.style';

import { createPost } from 'services/post';
import { IMAGE_DEFAULT } from 'core/constants';

const CreatePostComponent = ({ currentUser }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  return (
    <Card className={classes.rootCreatePost}>
      <img
        alt="Usuário"
        className={classes.image}
        src={currentUser ? currentUser.picture : IMAGE_DEFAULT}
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
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button
          onClick={() => {
            createPost({
              author: firebase
                .firestore()
                .collection('users')
                .doc(firebase.auth().currentUser.uid),
              text
            });
          }}
          disabled={text.length === 0}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Publicar
        </Button>
      </form>
    </Card>
  );
};

export default CreatePostComponent;
