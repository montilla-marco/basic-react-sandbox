import React, { useEffect } from 'react'
import style from './Cockpit.module.css'

const Cockpit = (props) => {
  console.log('[Cockpit.js:enter in functional component] -->');
  useEffect(() => {
    console.log('[Cockpit.js:useEffect] -->');
    // Http Request.. this is a hooks way to mix componentDidMount & componentDidUpdate
    setTimeout(() => console.log('[Cockpit.js:useEffect] response data from cloud'), 1000);
  }, [props.persons]);
  // set empty array for simulate componentDidMount only one time is called.
  // no setting parameter the behavior willbe the same componentDidUpdate.
  //, [props.persons]); putting aditional parameter, will enter only if any props.persons has changed.
  // returning a function will be simulating componentWillUnmount see Person.js Sample..

  const assignedClasses = [style.paragraph];
  if (props.persons.length <= 2) {
    assignedClasses.push(style.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(style.bold);
  }
  if (assignedClasses.length === 1) {
    assignedClasses.push(style.normal);
  }

  const btnClass = [style.cockpit_button];
  if (props.showPersons) {
    btnClass.push(style.cockpit_button_red);
  } else {
    btnClass.push(style.cockpit_button_normal);
  }

  return (
    //Alternativelly we can construct a array of jsx elements camma separate with key for each.
    /* [
      <h1 key="key1"></h1>,
      <div key="key2"></div>
    ] */
    <>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is a real React App.</p>
      <button
        className={btnClass.join(' ')}
        onClick={() => props.togglePersonHandler()}>Switch Name</button>
      <button onClick={props.login}>Log in</button>
    </>
  );
}

export default Cockpit;