import React, { Component } from 'react';
import { Route } from 'react-router';
import SignupPage from './auth/signup/SignupPage';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignupPage} />
      </div>
    );
  }
}

export default AppRouter;