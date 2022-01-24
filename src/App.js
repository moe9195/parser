import './Styles/App.css';
import React from 'react';
import Window from './Components/Window';
import {
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Window/>
    </ThemeProvider>
  );
}

export default App;
