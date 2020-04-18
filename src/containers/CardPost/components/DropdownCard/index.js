import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, IconButton, ListItem, ListItemText } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { useStyles, StyledList, StyledPopover } from './DropdownCard.style';

import Alert from 'components/Alert';

import { deletePost } from 'services/post';

const DropdownCardComponent = ({ post, currentUser, onEdit }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const userOwner = currentUser && post.author.id === currentUser.id;

  return (
    <>
      <StyledPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        style={{ borderRadius: 1 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Paper>
          <StyledList component="nav" aria-label="secondary mailbox folders">
            {userOwner && (
              <>
                <ListItem className={classes.item} button>
                  <ListItemText
                    classes={{ primary: classes.itemText }}
                    primary="Editar"
                    onClick={onEdit}
                  />
                </ListItem>
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
              </>
            )}
            <ListItem className={classes.item} button>
              <ListItemText
                classes={{ primary: classes.itemText }}
                primary="Salvar"
              />
            </ListItem>
          </StyledList>
        </Paper>
      </StyledPopover>
      <IconButton
        className={classes.button}
        onClick={event => setAnchorEl(event.currentTarget)}
        disableFocusRipple
        disableRipple
      >
        <ChevronLeft />
      </IconButton>
      <Alert
        open={openAlert}
        title="Atenção!!!"
        description="Tem certeza que deseja deletar essa sugestão?"
        onConfirm={async () => {
          try {
            await deletePost(post.id);

            enqueueSnackbar('Postagem deletada com sucesso', {
              variant: 'success'
            });
          } catch (e) {
            enqueueSnackbar('Ocorreu um erro ao deletar a postagem', {
              variant: 'error'
            });
          }
        }}
        onClose={() => setOpenAlert(false)}
      />
    </>
  );
};

DropdownCardComponent.propTypes = {
  post: PropTypes.object.isRequired
};

export default DropdownCardComponent;
