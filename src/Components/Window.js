
import React, { useState } from 'react';
import InputField from './InputField'
import {
  makeStyles,
  Grid,
  Paper,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  iconButton: {
    position: 'fixed',
    right: 0,
  },
}))


const Window = ({ }) => {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <InputField />
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>

  );
}

export default Window;
