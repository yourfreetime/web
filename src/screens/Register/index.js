import React, { useState } from 'react';
import { Typography, Grid, TextField } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import { useStyles, Link } from './Register.style';

import Card from 'components/Card';
import Button from 'components/Button';

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
        <Grid className={classes.form} item xs={12}>
          <Grid className={classes.rootImage} item xs={12}>
            <img
              alt="Logo do YourFreeTime"
              src="/assets/logo.png"
              className={classes.img}
            />
          </Grid>
          <Typography className={classes.title} align="center">
            Registre-se para saber o que fazer em seu tempo livre.
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
                history.push('/');
              } catch (e) {
                enqueueSnackbar(e.message, { variant: 'error' });
              }
            }}
          >
            <Grid spacing={3} container>
              <Grid item xs={12}>
                <TextField
                  id="name"
                  name="name"
                  label="Nome"
                  className={classes.input}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
                <TextField
                  id="email"
                  name="email"
                  label="E-mail"
                  className={classes.input}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <TextField
                  id="password"
                  name="password"
                  label="Senha"
                  type="password"
                  className={classes.input}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <TextField
                  id="confirm_password"
                  name="confirm_password"
                  label="Confirmar Senha"
                  type="password"
                  className={classes.input}
                  variant="outlined"
                  size="small"
                  fullWidth
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ display: 'flex' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.blockedButton}
                >
                  Cadastrar-se
                </Button>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex' }}>
                <Typography align="center">
                  Ao se cadastrar, você concorda com nossos{' '}
                  <Link to="/terms-policy-and-cookies-policy">
                    Termos, Política de Dados e Política de Cookies.
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Card>
      <Card className={classes.card}>
        <div>
          Tem um conta?{' '}
          <Link to="/login" variant="contained">
            Conecte-se
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default RegisterScreen;
