import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import AppRouter from './AppRouter';
import NavBar from './nav/NavBar';
import '../app.css';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    return (
      <div className="container">
        <NavBar/>
        <AppRouter/>
      </div>
    );
  }
}

export default hot(module)(App);