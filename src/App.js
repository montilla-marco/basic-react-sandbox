import React, { useState } from 'react'
// import React from 'react';
import Radium, { StyleRoot } from 'radium';
import './App.css';
import Person from './components/Person/Person';
import person from './components/Person/Person';

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
          {personsState.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age}
                click={() => deletePersonHandler(index)}
                changed={(event) => nameChangedHandler(event, index)} />
            );
          })};

        </div>
      );
    }
  }

  return (
    <StyleRoot>
      <div div div className="App" >
        <h1>Hi!!</h1>
        <button onClick={() => togglePersonHandler()}>Switch Name</button>
        {showPersonsContent()}
      </div>
    </StyleRoot>
  );
}


// console.log('personsState', personsState);
// console.log('otherState', otherState);

// const switchNameHandler = (newName) => {
//   setPersonsState({
//     persons: [
//       { name: newName, age: 43 },
//       { name: 'Esteban', age: .3 }
//     ]
//   });
//   console.log('Was Clicked!! ', personsState);
// }


// return (
//   <div>
//     <Person
//       name={personsState.persons[0].name}
//       age={personsState.persons[0].age}
//       click={() => switchNameHandler('Antonio')}>My hoobies are: Sing, Run</Person>
//     <Person
//       name={personsState.persons[1].name}
//       age={personsState.persons[1].age}
//       click={() => switchNameHandler('David')}
//       changed={(event) => nameChangedHandler(event)}>My hoobies are: eat, sleep</Person>
//   </div>
// );

/* {       showPersonsState.showPersons === true ?
         <div>
           <Person
             name={personsState.persons[0].name}
             age={personsState.persons[0].age}
             click={() => switchNameHandler('Antonio')}>My hoobies are: Sing, Run</Person>
           <Person
             name={personsState.persons[1].name}
             age={personsState.persons[1].age}
             click={() => switchNameHandler('David')}
             changed={(event) => nameChangedHandler(event)}>My hoobies are: eat, sleep</Person>
         </div> : null
     } */
/* class App extends Component {
  state = {
    persons: [
      { name: 'Marco', age: 43 },
      { name: 'Esteban', age: 1 }
    ]
  }

  switchNameHandler = () => {
    console.log('Was Clicked!! ');
    this.setState({
      persons: [
        { name: 'Antonio', age: 43 },
        { name: 'Esteban', age: .3 }
      ]
    });
  }

  render() {
    return (
      <div div className="App" >
        <h1>Hi!!</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}>My hoobies are: Sing, Run</Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}>My hoobies are: eat, sleep</Person>
      </div >
    );
  }
}*/

// function App() {
//   return (
//     <div div className="App" >
//       <h1>Hi!!</h1>
//       <Person
//         name="Marco"
//         age="43">My hoobies are: Sing, Run, Ride in bike</Person>
//     </div >
//     // ****** The component to be returned have to be wrap in a root element. ****** //
//     // Adjacent JSX elements must be wrapped in an enclosing tag.
//     //<h1>Hi1</h1>
//   );
// }

// The code above is compiled to the code below line 17.

/* class App extends Component {
  render() {
    let result = React.createElement('div', { className: 'App' }, createH1());
    console.log('result', result);
    return result;
  }
}

function createH1() {
  return React.createElement('h1', null, 'Welcome to my world!!');
} */
export default Radium(App);
