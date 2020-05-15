import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { uCreatePost } from 'yourfreetime/cache';
import { CREATE_POST } from 'yourfreetime/mutations';

import { useStyles } from './CreatePost.style';

import Card from 'components/Card';
import Button from 'components/Button';

import { IMAGE_DEFAULT, readCurrentUser } from 'core/constants';

const CreatePostComponent = () => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [createPost] = useMutation(CREATE_POST, {
    update: uCreatePost.bind(this, null)
  });

  const currentUser = readCurrentUser();

  return (
    <Card className={classes.rootCreatePost}>
      <img
        alt="Usuário"
        className={classes.image}
        src={currentUser ? currentUser.picture : IMAGE_DEFAULT}
      />
      <form className={classes.postForm}>
        <TextField
          id="createPost"
          name="createPost"
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
          onClick={() => createPost({ variables: { text } })}
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
