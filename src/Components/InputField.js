import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

const countLines = input => input === "" ? 0 : input.split(/\r\n|\r|\n/).length
const countCharacters = input => input.length

const InputField = ({ setCount, input, setInput }) => {
 
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
    <CodeMirror
      placeholder="Your text list here..."
      value={input}
      theme='light'
      height="720px"
      onChange={(value, viewUpdate) => {
        updateValues(value)
      }}
    />
  );
}


export default InputField;

