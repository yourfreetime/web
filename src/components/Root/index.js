import React from 'react';
import { useStyles } from './Root.style';

const RootComponent = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.root}>{children}</section>;
};

export default RootComponent;
