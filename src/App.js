import './Styles/App.css';
import React, { useState } from 'react';
import DarkModeToggle from './Components/DarkModeToggle';
import Window from './Components/Window';
import {
  createMuiTheme,
  ThemeProvider,
  CssBaseline
} from '@material-ui/core';

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
