import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import RoutesCore from "./Routes";

const theme = createMuiTheme({
  palette: { primary: { main: "#009688" } }
});

const App = () => (
  <ThemeProvider theme={theme}>
    <RoutesCore />
  </ThemeProvider>
);

export default App;
