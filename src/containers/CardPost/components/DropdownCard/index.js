import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, IconButton, ListItem, ListItemText } from '@material-ui/core';

import ChevronLeft from '@material-ui/icons/ChevronLeft';
import { useStyles, StyledList, StyledPopover } from './DropdownCard.style';

import DeletePost from '../DeletePost';

import { readCurrentUser } from 'core/constants';

const DropdownCardComponent = ({ post, onEdit }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const userOwner = post.author.id === readCurrentUser().id;

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
                <DeletePost postId={post.id} />
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
    </>
  );
};

DropdownCardComponent.propTypes = {
  post: PropTypes.object.isRequired
};

export default DropdownCardComponent;
