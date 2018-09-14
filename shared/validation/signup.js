import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Invalid Email';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = 'First name is required';
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = 'Last name is required';
  }

  if (Validator.isEmpty(data.birthDay)) {
    errors.birthDay = 'Birth day is required';
  }

  if (Validator.isEmpty(data.birthMonth)) {
    errors.birthMonth = 'Birth Month is required';
  }

  if (Validator.isEmpty(data.birthYear)) {
    errors.birthYear = 'Birth year is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}