import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './apolloClient';

import RoutesCore from './Routes';
import { colors } from './constants';

const theme = createMuiTheme({ palette: { primary: colors } });

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
