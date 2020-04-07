import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './ButtonFooter.style';

import FlightTakeoff from '@material-ui/icons/FlightTakeoff';
import Comment from '@material-ui/icons/Comment';

const icons = {
  enhance: FlightTakeoff,
  reply: Comment
};

const ButtonFooterComponent = ({
  icon,
  children,
  active,
  component,
  ...props
}) => {
  const classes = useStyles({ active });
  const Icon = icons[icon];
  const Component = component;

  return (
    <Component className={classes.root} {...props}>
      <Icon className={classes.image} />
      {children}
    </Component>
  );
};

ButtonFooterComponent.propTypes = {
  icon: PropTypes.oneOf(['enhance', 'reply']).isRequired,
  active: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

ButtonFooterComponent.defaultProps = {
  active: false,
  component: 'button'
};

export default ButtonFooterComponent;
