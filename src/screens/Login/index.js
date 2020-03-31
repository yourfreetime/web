import React from "react";
import { Button, Card, Grid, TextField } from "@material-ui/core";
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

const useStyles = makeStyles({
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
  img: {
    width: "80%",
    height: "auto"
  },
  form: {
    display: "flex",
    alignItems: "center"
  }
});

export default LoginScreen;
