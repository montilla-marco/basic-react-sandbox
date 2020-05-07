import React, { useEffect } from 'react';
import Radium from 'radium';
import "./Person.css";
import PropTypes from 'prop-types';

const Person = (props) => {

  useEffect(() => {
    console.log('[Person.js:useEffect] -->');
    // Http Request.. this is a hooks way to mix componentDidMount & componentDidUpdate
    const timer = setTimeout(() => console.log('[Person.js:useEffect] response data from cloud'), 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Person.js:useEffect] making cleanup job -->');
    }
  }, []);

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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Radium(Person);
