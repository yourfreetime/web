import React from "react";
import { Typography, Button, Card, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const LoginScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <img
              alt="Logo do YourFreeTime"
              src="/assets/logo.png"
              className={classes.img}
            />
          </Grid>
          <Grid className={classes.form} item xs={12} sm={7}>
            <Typography className={classes.title} align="center" variant="h4">
              Login
            </Typography>
            <Grid spacing={3} container>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  name="password"
                  label="Senha"
                  type="password"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth color="primary">
                  Entrar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    padding: 20,
    width: 800,
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  title: {
    margin: 0,
    marginBottom: 25,
    fontWeight: "bold",
    color: theme.palette.primary.main
  },
  img: { width: "80%", height: "auto" },
  form: { display: "flex", justifyContent: "center", flexDirection: "column" }
}));

export default LoginScreen;
