import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './ButtonFooter.style';

import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import Comment from '@material-ui/icons/Comment';

const icons = {
  enhance: FlightTakeoff,
  reply: Comment
};

const ButtonFooterComponent = ({ onClick, icon, children, active }) => {
  const classes = useStyles({ active });
  const Icon = icons[icon];

  return (
    <button className={classes.root} onClick={onClick}>
      <Icon className={classes.image} />
      {children}
    </button>
  );
};

ButtonFooterComponent.propTypes = {
  icon: PropTypes.oneOf(['enhance', 'reply']).isRequired,
  active: PropTypes.bool
};

ButtonFooterComponent.defaultProps = {
  active: false
};

export default ButtonFooterComponent;
