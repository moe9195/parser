import React, { useState } from 'react';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import {
  makeStyles,
  Typography,
  TextField
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
  },
  textField: {
    width: '100%',
    overflow: 'auto',
    fontSize: '14px',
    fontFamily: '"Fira code", "Fira Mono", monospace',
  },
  description: {
    fontSize: '14px'
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

  return (
    <div className={classes.root}>
      <Typography variant="overline" className={classes.description}>
        {languageData[language]['title']}
      </Typography>
      <TextField
          className={classes.textField}
          multiline
          disabled
          rows={12}
          rowsMax={12}
          value={language === 'csv' ? toCSV(input, space) : toArray(input, numInQuotes, doubleQuote, space) }
          variant="outlined"
        />
    </div>
  );
}


export default ParsedArea;

