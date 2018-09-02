import React, { Component } from 'react';
import { hot } from "react-hot-loader";

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div>
        <h1>Hello from React!!</h1>
      </div>
    );
  }
}

export default hot(module)(App);