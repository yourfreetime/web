import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const ContainerComponent = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.root}>{children}</section>;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
    margin: '0 auto',
    paddingTop: 16
  }
});

export default ContainerComponent;
