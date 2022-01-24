import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  makeStyles,
  Typography,
  Button
} from '@material-ui/core';
import {
  ToggleButton,
  ToggleButtonGroup
} from '@material-ui/lab';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '40%',
    paddingTop: theme.spacing(5),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  buttonGroup: {
    display: 'flex',
    width: '75%',
    marginBottom: theme.spacing(5)
  },
  button: {
    width: '50%'
  },
  description: {
    fontSize: '14px'
  },
  deleteButton: {
    width: '75%'
  }
}))

const Settings = ({ numInQuotes, setNumInQuotes, doubleQuote, setDoubleQuote, space, setSpace, compact, setCompact, resetData }) => {
  const classes = useStyles();

  const handleNumInQuotes = (event, newNumInQuotes) => {
    setNumInQuotes(newNumInQuotes);
  };

  const handleDoubleQuote = (event, newDoubleQuote) => {
    setDoubleQuote(newDoubleQuote);
  };

  const handleSpace = (event, newSpace) => {
    setSpace(newSpace);
  };

  const handleCompact = (event, newCompact) => {
    setCompact(newCompact);
  };

  return (
    <div className={classes.root}>
      <Typography variant="overline" className={classes.description}>
        quotes type
      </Typography>
      <ToggleButtonGroup className={classes.buttonGroup}
        value={doubleQuote}
        exclusive
        onChange={handleDoubleQuote}
        aria-label="number in quotes selector buttons"
      >
        <ToggleButton className={classes.button} value="false">Single</ToggleButton>
        <ToggleButton className={classes.button} value="true">Double</ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="overline" className={classes.description}>
        numbers in quotes?
      </Typography>
      <ToggleButtonGroup className={classes.buttonGroup}
        value={numInQuotes}
        exclusive
        onChange={handleNumInQuotes}
        aria-label="quote type selector buttons"
      >
        <ToggleButton className={classes.button} value="false">No</ToggleButton>
        <ToggleButton className={classes.button} value="true">Yes</ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="overline" className={classes.description}>
        spaced values?
      </Typography>
      <ToggleButtonGroup className={classes.buttonGroup}
        value={space}
        exclusive
        onChange={handleSpace}
        aria-label="space selector buttons"
      >
        <ToggleButton className={classes.button} value="false">No</ToggleButton>
        <ToggleButton className={classes.button} value="true">Yes</ToggleButton>
      </ToggleButtonGroup>

      <Typography variant="overline" className={classes.description}>
        remove empty values?
      </Typography>
      <ToggleButtonGroup className={classes.buttonGroup}
        value={compact}
        exclusive
        onChange={handleCompact}
        aria-label="compact selector buttons"
      >
        <ToggleButton className={classes.button} value="false">No</ToggleButton>
        <ToggleButton className={classes.button} value="true">Yes</ToggleButton>
      </ToggleButtonGroup>


      <Button
        variant="contained"
        color="secondary"
        className={classes.deleteButton}
        startIcon={<DeleteIcon />}
        onClick={() => resetData()}
      >
        clear all
      </Button>
    </div>
  );
}


export default Settings;

