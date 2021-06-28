import './Styles/App.css';
import React, { useState } from 'react';
import DarkModeToggle from './Components/DarkModeToggle';
import Window from './Components/Window';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
}))

function App() {
  const classes = useStyles()
  const [darkMode, setDarkMode] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <DarkModeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </header>

      <Window/>
    </ThemeProvider>
  );
}

export default App;
