import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { useSnackbar } from 'notistack';
import { uCreateComment } from 'yourfreetime/cache';
import { CREATE_COMMENT } from 'yourfreetime/mutations';

import { useStyles } from './FormComment.style';

import Button from 'components/Button';
import { readCurrentUser, IMAGE_DEFAULT } from 'core/constants';

const FormCommentComponent = ({ postId, show }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [createComment] = useMutation(CREATE_COMMENT, {
    onCompleted: () => {
      enqueueSnackbar('Comentário realizado com sucesso', {
        variant: 'success'
      });

      setText('');
    },
    onError: () =>
      enqueueSnackbar('Ocorreu um erro ao comentar a postagem', {
        variant: 'error'
      }),
    update: uCreateComment.bind(this, { postId })
  });

  if (!show) {
    return <div />;
  }

  const currentUser = readCurrentUser();

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
          autoFocus
          size="small"
          onChange={e => setText(e.target.value)}
        />
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={() => createComment({ variables: { text, postId } })}
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
  show: PropTypes.bool
};

FormCommentComponent.defaultProps = {
  show: false
};

export default FormCommentComponent;
