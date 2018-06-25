import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      title: ""
    };
  }
  render() {
    return (
      <h1>Hello From React!!!</h1>
    );
  }
}

const wrapper = document.getElementById("react-app");
wrapper ? ReactDOM.render(<Dashboard />, wrapper) : false;