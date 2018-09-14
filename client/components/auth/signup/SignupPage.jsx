import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { userSignupRequest } from "../../../actions/signupActions";
class SignupPage extends Component {
  render() {
    return (
      <div className="signup-page">
        <h1>Create a New Account</h1>
        <span className="grey-text">It's free and always will be.</span>
        <SignupForm
          userSignupRequest={this.props.userSignupRequest}/>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest})(SignupPage);