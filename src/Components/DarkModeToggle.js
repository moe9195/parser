
import React, { useState } from 'react';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import {
  IconButton,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'row',
  },
  iconButton: {
    position: 'fixed',
    right: 0,
  },
}))


const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <IconButton className={classes.iconButton} size="small" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <Brightness7Icon
            style={{ color: 'primary', fontSize: '2rem' }}
          />
        ) : (
          <Brightness4Icon
            style={{ color: 'primary', fontSize: '2rem' }}
          />
        )}
      </IconButton>
    </React.Fragment>

  );
}

export default DarkModeToggle;
