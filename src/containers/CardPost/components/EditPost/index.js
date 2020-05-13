import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { useMutation } from '@apollo/react-hooks';
import { useSnackbar } from 'notistack';

import { useStyles } from './EditPost.style';

import Button from 'components/Button';

import { UPDATE_POST, LIST_POSTS_FEED } from 'services/post';

const EditPostComponent = ({ post, onClose }) => {
  const classes = useStyles();
  const [text, setText] = useState(post.text);
  const { enqueueSnackbar } = useSnackbar();
  const [updatePost] = useMutation(UPDATE_POST, {
    onCompleted: () => {
      enqueueSnackbar('Postagem editada com sucesso', {
        variant: 'success'
      });

      onClose();
    },
    onError: () =>
      enqueueSnackbar('Ocorreu um erro ao editar a postagem', {
        variant: 'error'
      }),
    update(cache, { data }) {
      const { listPostsFeed } = cache.readQuery({ query: LIST_POSTS_FEED });

      cache.writeQuery({
        query: LIST_POSTS_FEED,
        data: {
          listPostsFeed: listPostsFeed.map(item =>
            item.id === post.id ? data.updatePost : item
          )
        }
      });
    }
  });

  return (
    <div className={classes.root}>
      <TextField
        id="editPost"
        name="editPost"
        label="O que você está fazendo no seu tempo livre?"
        variant="outlined"
        placeholder="O que você está fazendo no seu tempo livre?"
        fullWidth
        multiline
        autoFocus
        rowsMax={5}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div style={{ textAlign: 'right' }}>
        <Button
          onClick={onClose}
          className={classes.button}
          variant="contained"
        >
          Cancelar
        </Button>
        <Button
          onClick={() => updatePost({ variables: { postId: post.id, text } })}
          disabled={text.length === 0}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Salvar
        </Button>
      </div>
    </div>
  );
};

EditPostComponent.propTypes = {
  post: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

export default EditPostComponent;
