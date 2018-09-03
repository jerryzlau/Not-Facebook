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
      <form className="flex-col signup-form" onSubmit={this.onSubmit}>
        <div className="flex-row">
          <TextFieldGroup 
            name="firstName"
            styles="signup-input"
            placeholder="First name"
            onChange={this.onChange}
            value={firstName} />

          <TextFieldGroup 
            name="lastName"
            styles="signup-input"
            placeholder="Last name"
            onChange={this.onChange}
            value={lastName} />
        </div>

        <TextFieldGroup 
          name="email"
          styles="signup-input"
          placeholder="Mobile number or email"
          onChange={this.onChange}
          value={email} />

        <TextFieldGroup 
          name="password"
          type="password"
          styles="signup-input"
          placeholder="New Password"
          onChange={this.onChange}
          value={password} />

        <div>
          <label >Birthday</label>
          <DatePicker day={birthDay} 
            month={birthMonth}
            year={birthYear}
            onChange={this.onChange}/>
        </div>

        <GenderPicker checked={gender} onChange={this.onChange} />

        <button>Sign Up</button>
      </form>
    );
  }
}

export default SignupForm;