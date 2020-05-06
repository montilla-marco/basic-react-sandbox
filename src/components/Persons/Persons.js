import React from 'react';
import Person from '../Person/Person';

const Persons = (props) => {
  // console.log('props.deletePersonHandler', props.click);
  // console.log('props.nameChangedHandler', props.changed);
  return props.persons.map((person, index) => {
    return (
      <Person
        key={index}
        name={person.name}
        age={person.age}
        click={() => props.click(index)}
        changed={(event) => props.changed(event, index)} />
    );
  });
}

export default Persons;
