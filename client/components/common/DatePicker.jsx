import React from 'react';
import PropTypes from 'prop-types';
import OptionFieldGroup from './OptionFieldGroup';

function buildYear(onChange, error){
  let options = [];
  for(var i=(new Date()).getFullYear(); i>=1905; i--){
    options.push({
      value: i,
      label: i
    });
  }

  return(
    <OptionFieldGroup 
      onChange={onChange}
      options={options}
      name="birthYear"
      error={error}
      defaultOption="Year" />
  );
}

function buildDay(onChange, error){
  let options = [];
  for(var i=1; i<=31; i++){
    options.push({
      value: i,
      label: i
    });
  }

  return (
    <OptionFieldGroup 
      onChange={onChange}
      options={options}
      name="birthDay"
      error={error}
      defaultOption="Day"/>
  );
}

function buildMonth(onChange, error){
  let options = [
    {
      value: '01',
      label: 'Jan'
    },
    {
      value: '02',
      label: 'Feb'
    },
    {
      value: '03',
      label: 'Mar'
    },
    {
      value: '04',
      label: 'Apr'
    },
    {
      value: '05',
      label: 'May'
    },
    {
      value: '06',
      label: 'Jun'
    },
    {
      value: '07',
      label: 'Jul'
    },
    {
      value: '08',
      label: 'Aug'
    },
    {
      value: '09',
      label: 'Sep'
    },
    {
      value: '10',
      label: 'Oct'
    },
    {
      value: '11',
      label: 'Nov'
    },
    {
      value: '12',
      label: 'Dec'
    },
  ];

  return (
    <OptionFieldGroup
      options={options}
      onChange={onChange}
      name="birthMonth"
      error={error}
      defaultOption="Month" />
  );
}

const DatePicker = ({onChange, error}) => {
  return (
    <div>
      {buildMonth(onChange, error)}
      {buildDay(onChange, error)}
      {buildYear(onChange, error)}
    </div>
  );
};

export default DatePicker;