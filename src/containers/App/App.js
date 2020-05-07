//import React, { useState, Component } from 'react'
import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import '../../containers/App/App.css';
import Persons from '../../components/Persons/Persons';
import Cockpit from '../../components/Cockpit/Cockpit'
import AuthContext from '../../context/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js:constructor]', props);
    // you hace to asign directly initial state with this.state is in the only stage in other methods use setState().
    // avoid copy the props in the state. is a common error!!!
    this.state = {
      persons: [
        { name: 'Max', age: '28' },
        { name: 'Manu', age: '29' },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      authenticated: false
    }
    //Do Not Modify State Directly
    //this.state.date = new Date();
    //this.state = {date: new Date()};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js:getDerivedState] state: ', state);
    /* render() can not be invoked if shouldComponentUpdate() returns false.
    The new static getDerivedStateFromProps lifecycle is invoked after a component
    is instantiated as well as before it is re - rendered.It can return an object
    to update state, or null to indicate that the new props do not require any state updates. */
    return state;
  }

  componentDidMount() {
    console.log('[App.js:componentDidMount] -->');
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js:shouldComponentUpdate] --> ');
    /* This method ideally exist for performance optimization.should not avoid to prevent a render
    consider use PureComponent instead of shouldComponentUpdate().PureComponent realize a comparation
    of props and estate, and reduce the posibility of innecesary update. */
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log('[App.js:componentDidUpdate] --> ', prevProps);
    /* componentDidUpdate() does not invoked if shouldComponentUpdate() returns false. 
     you can use this method to operate DOM when de component has been actualizated. This is
     a good place for make http requests and compare the values with previous for example:
     if one propertie does not changed, there is not need to make a call.
     componentDidUpdate(prevProps) {
        if (this.props.userID !== prevProps.userID) {
          this.fetchData(this.props.userID);
        }
      }
    */
  }
  componentWillUnmount() {
    console.log('[App.js:componentWillUnmount] --> ');
  }

  loginHandler() {
    this.setState({ authenticated: true })
  }

  nameChangedHandler = (event, index) => {
    const person = {
      ...this.state.persons[index]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    console.log('setShowPersons.showPersons: ' + this.state.showPersons);
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  }

  showPersonsContent = () => {
    if (this.state.showPersons) {
      return (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }
  }

  render() {
    console.log('[App.js:render] -->');
    return (
      <StyleRoot>
        <div className="App" >
          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }} >
            <Cockpit
              title={this.props.title}
              showPersons={this.state.showPersons}
              persons={this.state.persons}
              togglePersonHandler={this.togglePersonHandler}
              login={this.loginHandler}
            />
            {this.showPersonsContent()}
          </AuthContext.Provider>
        </div>
      </StyleRoot >
    );

  }
}

export default Radium(App);
