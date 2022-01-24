import './Styles/App.css';
import React from 'react';
import Window from './Components/Window';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

function App() {

  const theme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Window/>
    </ThemeProvider>
  );
}

export default App;
