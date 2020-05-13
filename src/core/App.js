import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import RoutesCore from './Routes';
import { colors } from './constants';

const theme = createMuiTheme({ palette: { primary: colors } });

firebase.initializeApp({
  apiKey: 'AIzaSyB40DrzgKhP2eY2lYITPSmN6ypodYa3JYY',
  authDomain: 'freetime-2df7f.firebaseapp.com',
  databaseURL: 'https://freetime-2df7f.firebaseio.com',
  projectId: 'freetime-2df7f',
  storageBucket: 'freetime-2df7f.appspot.com',
  messagingSenderId: '297465484938',
  appId: '1:297465484938:web:5d9b8ee0c9c02c75b2bf73'
});

const App = () => (
  <ApolloProvider client={apolloClient}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <RoutesCore />
      </SnackbarProvider>
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
