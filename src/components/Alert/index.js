import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';

import Button from 'components/Button';

const AlertComponent = ({ open, title, description, onConfirm, onClose }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancelar
      </Button>
      <Button onClick={onConfirm} color="primary" autoFocus>
        Confirmar
      </Button>
    </DialogActions>
  </Dialog>
);

AlertComponent.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func
};

AlertComponent.propTypes = {
  open: false
};

export default AlertComponent;
