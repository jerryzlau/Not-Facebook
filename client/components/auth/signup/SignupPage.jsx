import React, { Component } from 'react';
import SignupForm from './SignupForm';
import { connect } from "react-redux";
import { userSignupRequest } from "../../../actions/signupActions";
class SignupPage extends Component {
  render() {
    return (
      <div className="flex-row space-around margin-70">
        <div className="landing-slogan">
          <h2>Connect with your friends and the world around you on Not Facebook.</h2>
          <div className="flex-row margin-30">
            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2365-6/32213527_1720875981299142_7601737152052854784_n.png?_nc_cat=1&amp;oh=d9f118b423f0d1924181d32355be544a&amp;oe=5C2966E8"/>
            <p className="margin-5">See photos and updates <span className="grey-text">from friends in News Feed.</span></p>
          </div>
          <div className="flex-row margin-30">
            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2365-6/32220240_200651090730619_3989834943638274048_n.png?_nc_cat=1&oh=e053584e8201b6e8684a2e3b5fc673a2&oe=5C28D236"/>
            <p className="margin-5">Share what's new <span className="grey-text">in your life on your Timeline.</span></p>
          </div>
          <div className="flex-row margin-30">
            <img src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.2365-6/32158113_191365994837162_5605369115159035904_n.png?_nc_cat=1&oh=6d7708d7db53c701c2339afb7d130625&oe=5C386FB5"/>
            <p className="margin-5">Find more <span className="grey-text">of what you're looking for with Facebook Search.</span></p>
          </div>
        </div>
        <div className="signup-page">
          <h1>Create a New Account</h1>
          <span className="grey-text">It's free and always will be.</span>
          <SignupForm
            userSignupRequest={this.props.userSignupRequest}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { userSignupRequest})(SignupPage);