import React from 'react';
import Radium from 'radium'
import "./Person.css"

const person = (props) => {
  const style = {
    '@media screen and (max-width: 300px)': {
      width: '50px'
    }
  }
  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>Hi!! my name is {props.name} and I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>

  );
}

export default Radium(person);
