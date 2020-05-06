import React from 'react'
import style from './Cockpit.module.css'

const Cockpit = (props) => {
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
    <>
      <h1>Hi!!</h1>
      <p className={assignedClasses.join(' ')}>This is a real React App.</p>
      <button
        className={btnClass.join(' ')}
        onClick={() => props.togglePersonHandler()}>Switch Name</button>
    </>
  );
}

export default Cockpit;