import React, { Component } from 'react';
import SignupForm from './SignupForm';

class SignupPage extends Component {
  render() {
    return (
      <div className="signup-page">
        <p>Create a New Account</p>
        <p>It's free and always will be.</p>
        <SignupForm/>
      </div>
    );
  }
}

export default SignupPage;