import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import RoutesCore from './Routes';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688',
      dark: '#00786c',
      greyDarken3: '#37474f',
      background: '#cfd8dc'
    }
  }
});

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
  <ThemeProvider theme={theme}>
    <RoutesCore />
  </ThemeProvider>
);

export default App;
