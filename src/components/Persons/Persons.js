import React, { useEffect, useRef, useContext } from 'react';
import Person from '../Person/Person';
import AuthContext from '../../context/auth-context';

const Persons = props => {
  // REF: in class you can use this.inputElement
  const inputReference = useRef(null); //doesn't work bullishit
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Personssssssssssssssssssss.js:useEffect] -->');
    //document.getElementsByTagName('input')[props.persons.length].focus();
    // inputReference.current.focus();
    console.log('inputReference.current', inputReference.current);
    console.log('authContext.authenticated', authContext.authenticated);
  }, []);

  console.log('[Persons.js:rendering] -->');
  return props.persons.map((person, index) => {

    return (
      <Person
        key={index}
        //ref={(input) => input.focus()}
        ref={inputReference}
        name={person.name}
        age={person.age}
        click={() => props.click(index)}
        changed={(event) => props.changed(event, index)}
      />

    );
  });
}

{/* <AuthContext.Consumer>
  {(context) => context.authenticated ? <p>logged</p> : <p>Please login..</p>}
  </AuthContext.Consumer> */}
export default Persons;
