
import React, { useState } from 'react';
import InputField from './InputField'
import ParsedArea from './ParsedArea'
import Settings from './Settings'
import {
  makeStyles,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(10),
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
  column: {
    margin: theme.spacing(0),
    color: theme.palette.text.secondary,
    height: '720px'
  },
  iconButton: {
    position: 'fixed',
    right: 0,
  },
  counter: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    fontSize: '16px'
  },
  result: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: '50%'
  }
}))


const Window = () => {
  const classes = useStyles();
  const [numInQuotes, setNumInQuotes] = useState('false');
  const [doubleQuote, setDoubleQuote] = useState('false');
  const [space, setSpace] = useState('false');
  const [compact, setCompact] = useState('false');
  const [input, setInput] = useState('');
  const [count, setCount] = useState({
    lines: 0,
    characters: 0,
  });

  const resetData = () => {
    setInput('');
    setCount(
      {
        lines: 0,
        characters: 0,
      }
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Paper className={classes.column}>
            <InputField
              setCount={setCount}
              input={input}
              setInput={setInput}
            />
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.column}>
            <Settings
              numInQuotes={numInQuotes}
              setNumInQuotes={setNumInQuotes}
              doubleQuote={doubleQuote}
              setDoubleQuote={setDoubleQuote}
              space={space}
              setSpace={setSpace}
              compact={compact}
              setCompact={setCompact}
              resetData={resetData}
            />
          </Paper>
        </Grid>
        <Grid className={classes.column} item xs={5}>
          {
            ['csv', 'arr'].map((language) => (
              <Paper className={classes.result}>
                <ParsedArea
                  input={input}
                  language={language}
                  numInQuotes={numInQuotes}
                  doubleQuote={doubleQuote}
                  space={space}
                  compact={compact}
                  />
              </Paper>
            ))
          }
        </Grid>
      </Grid>
      <Typography variant="overline" className={classes.counter}>
        {count['lines']} lines | {count['characters']} characters
      </Typography>
    </div>

  );
}

export default Window;
