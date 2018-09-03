import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <div className="signup-page">
        <h1>Create a New Account</h1>
        <span className="grey-text">It's free and always will be.</span>
        <SignupForm/>
      </div>
    );
  }
}

export default SignupPage;