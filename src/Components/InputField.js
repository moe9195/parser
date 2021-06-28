import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import {
  makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  containerArea: {
    tabSize: '4ch',
    maxHeight: '400px',
    overflow: 'auto',
    margin: '1.67em 0',
  },
}))

const countLines = input => input === "" ? 0 : input.split(/\r\n|\r|\n/).length
const countCharacters = input => input.length

const InputField = ({ setCount, input, setInput }) => {
  const classes = useStyles();
 
  const updateValues = (input) => {
    setInput(input);
    setCount(
      {
        lines: countLines(input),
        characters: countCharacters(input),
      }
    );
  }

  return (
    <div className={classes.root}>
      <Editor
        value={input}
        onValueChange={input => updateValues(input)}
        highlight={input => highlight(input, languages.js)}
        placeholder="Your text list here..."
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          border: 'hidden',
          fontSize: 14,
          overflow: 'auto',
          height: '720px',
        }}
      />
    </div>
  );
}


export default InputField;

