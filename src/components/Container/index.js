import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const ContainerComponent = ({ children }) => {
  const classes = useStyles();

  return <section className={classes.root}>{children}</section>;
};

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: 16
  }
}));

export default ContainerComponent;
