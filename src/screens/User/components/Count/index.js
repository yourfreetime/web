import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import { useStyles } from './Count.style';

const CountComponent = ({ count, title }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} className={classes.root}>
      <h4 className={classes.count}>{count}</h4>
      <h5 className={classes.text}>{title}</h5>
    </Grid>
  );
};

CountComponent.propTypes = {
  count: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
};

export default CountComponent;
