import React, { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {
  makeStyles,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const languageData = {
  csv: {
    title: '[raw] comma seperated values'
  },
  arr: {
    title: '[array] Python/Javascript and similar languages'
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  textField: {
    width: '100%',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: '"Fira code", "Fira Mono", monospace',
  },
  description: {
    fontSize: '14px'
  },
  copyButton: {
    margin: theme.spacing(1)
  }
}))

const isNumeric = n => !isNaN(parseFloat(n)) && isFinite(n);

const toCSV = (str, space) => space === "true" ? str.split("\n").join(', ') : str.split("\n")

const toArray = (str, numInQuotes, doubleQuote, space) => {
  if (str === "") return ""
  const arr = str.split("\n");
  const last = arr.pop();
  let parsed = '[';
  arr.forEach((n) => {
    let val = isNumeric(n) && (numInQuotes === "false") ? parseFloat(n) : doubleQuote === "true" ? `"${n}"` : `'${n}'`
    if (space == "true") {
      parsed += `${val}, `
    } else {
      parsed += `${val},`
    }
      
  })
  parsed += `${isNumeric(last) && (numInQuotes === "false") ? parseFloat(last) : doubleQuote === "true" ? `"${last}"` : `'${last}'`}]`;

  return parsed
}


const ParsedArea = ({ input, language, numInQuotes, doubleQuote, space }) => {
  const classes = useStyles();
  const output = language === 'csv' ? toCSV(input, space) : toArray(input, numInQuotes, doubleQuote, space)

  return (
    <div className={classes.root}>
      <Typography variant="overline" className={classes.description}>
        {languageData[language]['title']}
      </Typography>
      <TextField
          className={classes.textField}
          multiline
          disabled
          rows={11}
          rowsMax={11}
          value={output}
          variant="outlined"
      />
      <Button
        variant="contained"
        color="default"
        className={classes.copyButton}
        startIcon={<AssignmentIcon />}
        onClick={() => {navigator.clipboard.writeText(output)}}
      >
        Copy
      </Button>
    </div>
  );
}


export default ParsedArea;

