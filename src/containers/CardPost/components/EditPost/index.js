import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';

import { useStyles } from './EditPost.style';

import { updatePost } from 'services/post';

const EditPostComponent = ({ post, onClose }) => {
  const classes = useStyles();
  const [text, setText] = useState(post.text);
  const { enqueueSnackbar } = useSnackbar();

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
          onClick={async () => {
            try {
              await updatePost(post.id, text);

              enqueueSnackbar('Postagem editada com sucesso', {
                variant: 'success'
              });

              onClose();
            } catch {
              enqueueSnackbar('Ocorreu um erro ao editar a postagem', {
                variant: 'errot'
              });
            }
          }}
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
