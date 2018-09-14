import React, { Component } from 'react';
import { Route } from 'react-router';
import SignupPage from './auth/signup/SignupPage';
import NewsFeedPage from '../components/newsfeed/NewsFeedPage';

class AppRouter extends Component {
  render() {
    return (
      <div>
        <Route exact path="/newsfeed" component={NewsFeedPage}></Route>
        <Route exact path="/" component={SignupPage} />
      </div>
    );
  }
}

export default AppRouter;