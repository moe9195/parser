import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import {
  makeStyles,
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
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
      <CodeMirror
        placeholder="Your text list here..."
        value={input}
        theme='light'
        height="720px"
        onChange={(value, viewUpdate) => {
          updateValues(value)
        }}
      />
    </div>
  );
}


export default InputField;

