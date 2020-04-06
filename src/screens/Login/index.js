import React, { useState } from 'react';
import { Typography, Button, Card, Grid, TextField } from '@material-ui/core';
import { useStyles } from './Login.style';

import firebase from 'firebase/app';

const LoginScreen = ({ history }) => {
  const classes = useStyles();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container>
          <Grid className={classes.rootImage} item xs={12} sm={5}>
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
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={async () => {
                    console.log(email, password);
                    try {
                      await firebase
                        .auth()
                        .signInWithEmailAndPassword(email, password);

                      history.push('/');
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                  variant="contained"
                  fullWidth
                  color="primary"
                >
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

export default LoginScreen;
