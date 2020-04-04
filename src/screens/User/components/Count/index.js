import React from 'react';
import { Grid } from '@material-ui/core';

import { useStyles } from './Count.style';

const CountComponent = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} className={classes.root}>
      <h4 className={classes.count}>2</h4>
      <h5 className={classes.text}>Seguidores</h5>
    </Grid>
  );
};

export default CountComponent;
