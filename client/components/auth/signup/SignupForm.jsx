import React, { Component } from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';
import DatePicker from '../../common/DatePicker';
import GenderPicker from '../../common/GenderPicker';

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
      gender: ''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e){
    e.preventDefault();
    console.log('submitting');
  }

  render() {
    const { firstName, 
        lastName, email, password, 
        birthMonth, birthDay, birthYear, gender } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup 
          name="firstName"
          placeholder="First name"
          onChange={this.onChange}
          value={firstName} />

        <TextFieldGroup 
          name="lastName"
          placeholder="Last name"
          onChange={this.onChange}
          value={lastName} />

        <TextFieldGroup 
          name="email"
          placeholder="Email"
          onChange={this.onChange}
          value={email} />

        <TextFieldGroup 
          name="password"
          type="password"
          placeholder="New Password"
          onChange={this.onChange}
          value={password} />

        <DatePicker day={birthDay} 
          month={birthMonth}
          year={birthYear}
          onChange={this.onChange}/>
        <GenderPicker checked={gender} onChange={this.onChange} />

        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;