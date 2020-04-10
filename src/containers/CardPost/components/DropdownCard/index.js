import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Popover,
  Paper,
  IconButton,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import ChevronLeft from '@material-ui/icons/ChevronLeft';

import { useStyles } from './DropdownCard.style';

const DropdownCard = ({ post, currentUser }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const userOwner = currentUser && post.author.id === currentUser.id;

  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Paper>
          <List component="nav" aria-label="secondary mailbox folders">
            {userOwner && (
              <>
                <ListItem button>
                  <ListItemText primary="Editar" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="Excluir" />
                </ListItem>
              </>
            )}
            <ListItem button>
              <ListItemText primary="Salvar" />
            </ListItem>
          </List>
        </Paper>
      </Popover>
      <IconButton
        className={classes.button}
        onClick={event => setAnchorEl(event.currentTarget)}
        disableFocusRipple
        disableRipple
      >
        <ChevronLeft />
      </IconButton>
    </>
  );
};

DropdownCard.propTypes = {
  post: PropTypes.object
};

export default DropdownCard;
