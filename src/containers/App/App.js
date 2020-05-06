import React, { useState } from 'react'
import Radium, { StyleRoot } from 'radium';
import '../../containers/App/App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit'


const App = props => {

  const [otherState, setOtherState] = useState({ otherState: 'some other value' });
  const [showPersonsState, setShowPersonsState] = useState({ showPersons: false });
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]
  });

  const nameChangedHandler = (event, index) => {
    const person = {
      ...personsState.persons[index]
    };
    person.name = event.target.value;
    const persons = [...personsState.persons];
    persons[index] = person;
    setPersonsState({ persons: persons });
  }

  const deletePersonHandler = (index) => {
    const persons = [...personsState.persons];
    persons.splice(index, 1);
    setPersonsState({ persons: persons });
  }

  const togglePersonHandler = () => {
    console.log('setShowPersons.showPersons: ' + showPersonsState.showPersons);
    const show = showPersonsState.showPersons;
    setShowPersonsState({ showPersons: !show });
  }

  const showPersonsContent = () => {
    if (showPersonsState.showPersons) {
      return (
        <div>
          <Persons
            persons={personsState.persons}
            click={deletePersonHandler}
            changed={nameChangedHandler}
          />
        </div>
      );
    }
  }

  return (
    <StyleRoot>
      <div className="App" >
        <Cockpit
          showPersons={showPersonsState.showPersons}
          persons={personsState.persons}
          togglePersonHandler={togglePersonHandler}
        />
        {showPersonsContent()}
      </div>
    </StyleRoot>
  );
}

export default Radium(App);
