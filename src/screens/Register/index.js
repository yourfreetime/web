import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Card, Grid, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { useStyles } from './Register.style';

import { createUser } from 'services/user';

const RegisterScreen = ({ history }) => {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid className={classes.rootImage} item xs={12} sm={5}>
            <img
              alt="Logo do YourFreeTime"
              src="/assets/logo.png"
              className={classes.img}
            />
          </Grid>
          <Grid className={classes.form} item xs={12} sm={7}>
            <Typography className={classes.title} align="center" variant="h4">
              Registrar
            </Typography>
            <form
              onSubmit={async e => {
                e.preventDefault();

                if (!email || !password || !password || !confirmPassword) {
                  enqueueSnackbar('Campos obrigatórios não foram informados', {
                    variant: 'error'
                  });

                  return;
                }

                if (password !== confirmPassword) {
                  enqueueSnackbar(
                    'O campo senha e confirmar senha devem ser iguais',
                    { variant: 'error' }
                  );

                  return;
                }

                try {
                  await createUser({ email, name, password });
                } catch (e) {
                  enqueueSnackbar(e.message, { variant: 'error' });
                }

                history.push('/');
              }}
            >
              <Grid spacing={3} container>
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </Grid>
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
                  <TextField
                    id="confirm_password"
                    name="confirm_password"
                    label="Confirmar Senha"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} style={{ display: 'flex' }}>
                  <Button component={Link} to="/login" variant="contained">
                    Entrar
                  </Button>
                  <div style={{ flex: 1 }} />
                  <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default RegisterScreen;
