import React, { Component } from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import DatePicker from '../../common/DatePicker';
import GenderPicker from '../../common/GenderPicker';
import { withRouter } from "react-router-dom";
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      birthMonth: '',
      birthDay: '',
      birthYear: '',
      gender: '',
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value,
      errors: {}
    });
  }

  onSubmit(e){
    e.preventDefault();
    // console.log(this.state);
    this.props.userSignupRequest(this.state)
      .then((user) => {
        console.log(user);
        this.props.history.push('/newsfeed');
      }, (error) => {
        let { errors } = JSON.parse(error.responseText);
        this.setState({
          errors
        });
      });
  }

  render() {
    const { firstName, 
        lastName, email, password, 
      birthMonth, birthDay, birthYear, gender, errors } = this.state;

    return (
      <form className="signup-form flex-col space-between" onSubmit={this.onSubmit}>
        <div className="flex-row space-between">
          <input
            name="firstName"
            className="signup-input"
            style={errors.firstName && { border: '1px solid red' }}
            placeholder="First name"
            onChange={this.onChange}
            value={firstName} />  

          <input
            name="lastName"
            className="signup-input"
            placeholder="Last name"
            style={errors.lastName && { border: '1px solid red' }}
            onChange={this.onChange}
            error={errors.lastName}
            value={lastName} />  
        </div>

        <input
          name="email"
          className="signup-input"
          placeholder="Mobile number or email"
          onChange={this.onChange}
          style={errors.email && { border: '1px solid red' }}
          value={email} />  

        <input
          name="password"
          type="password"
          className="signup-input"
          placeholder="New Password"
          onChange={this.onChange}
          error={errors.password}
          style={errors.password && { border: '1px solid red' }}
          value={password} />  

        <div className="flex-col small-margin space-between">
          <label>Birthday</label>
          <DatePicker day={birthDay} 
            month={birthMonth}
            year={birthYear}
            error={errors.birthdate}
            onChange={this.onChange}/>
        </div>

        <div className="margin-5">
          <GenderPicker checked={gender} 
            onChange={this.onChange}
            error={errors.gender} />
        </div>

        <p className="grey-text small-text">
          By clicking Sign Up, you agree to our <a href=" ">Terms</a>, <a href=" ">Data Policy</a> and <a href=" ">Cookies Policy.</a> You may receive SMS Notifications from us and can opt out any time.
        </p>

        <button className="signup-button"><b>Sign Up</b></button>
      </form>
    );
  }
}

export default withRouter(SignupForm);