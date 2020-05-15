import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import { useMutation } from '@apollo/react-hooks';
import { updateDeletePost } from 'yourfreetime/cache';
import { DELETE_POST } from 'yourfreetime/mutations';

import { useStyles } from '../DropdownCard/DropdownCard.style';

import Alert from 'components/Alert';

const DeletePostComponent = ({ postId }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [openAlert, setOpenAlert] = useState(false);
  const [deletePost] = useMutation(DELETE_POST, {
    onCompleted: () =>
      enqueueSnackbar('Postagem deletada com sucesso', {
        variant: 'success'
      }),
    onError: () =>
      enqueueSnackbar('Ocorreu um erro ao deletar a postagem', {
        variant: 'error'
      }),
    update: updateDeletePost.bind(this, { postId })
  });

  return (
    <>
      <ListItem
        className={classes.item}
        onClick={() => setOpenAlert(true)}
        button
      >
        <ListItemText
          classes={{ primary: classes.itemText }}
          primary="Excluir"
        />
      </ListItem>
      <Alert
        open={openAlert}
        title="Atenção!!!"
        description="Tem certeza que deseja deletar essa sugestão?"
        onConfirm={() => deletePost({ variables: { postId } })}
        onClose={() => setOpenAlert(false)}
      />
    </>
  );
};

DeletePostComponent.propTypes = {
  postId: PropTypes.string.isRequired
};

export default DeletePostComponent;
