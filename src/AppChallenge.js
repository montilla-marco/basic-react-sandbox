import React, { Component } from "react";
import Output from './components/output/Output'
import Input from './components/input/Input'

class AppChallenge extends Component {

  state = {
    username: 'marco1a'
  }

  userNameInputhandler = event => {
    this.setState({
      username: event.target.value
    });
  }


  render() {
    return (
      <div className="AppChallenge">
        <Input changed={event => this.userNameInputhandler(event)} />
        <Output userName={this.state.username} />
        <Output userName={this.state.username} />
        <Output userName="marco" />
      </div >
    );
  }
}

export default AppChallenge;
