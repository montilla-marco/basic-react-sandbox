import React from 'react';
import "./Input.css"
const Input = (props) => {
  return (
    <input className="Input" type="text" onChange={props.changed}></input>
  );
}

export default Input;