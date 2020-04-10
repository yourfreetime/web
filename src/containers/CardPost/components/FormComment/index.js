import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { useSnackbar } from 'notistack';

import { useStyles } from './FormComment.style';

import { IMAGE_DEFAULT } from 'core/constants';
import { commentPost } from 'services/post';

const FormCommentComponent = ({ postId, show, currentUser }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  if (!show) {
    return <div />;
  }

  return (
    <div className={classes.root}>
      <div className={classes.input}>
        <img
          alt="Usuário"
          className={classes.image}
          src={currentUser ? currentUser.picture : IMAGE_DEFAULT}
        />
        <TextField
          id="commentPost"
          name="commentPost"
          label="O que você está fazendo no seu tempo livre?"
          variant="outlined"
          placeholder="O que você está fazendo no seu tempo livre?"
          fullWidth
          multiline
          rowsMax={5}
          value={text}
          size="small"
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={async () => {
            await commentPost(postId, {
              text,
              author: firebase
                .firestore()
                .collection('users')
                .doc(currentUser.id)
            });

            enqueueSnackbar('Comentário realizado com sucesso', {
              variant: 'success'
            });

            setText('');
          }}
          disabled={text.length === 0}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Responder
        </Button>
      </div>
    </div>
  );
};

FormCommentComponent.propTypes = {
  currentUser: PropTypes.object,
  show: PropTypes.bool
};

FormCommentComponent.defaultProps = {
  show: false
};

export default FormCommentComponent;
