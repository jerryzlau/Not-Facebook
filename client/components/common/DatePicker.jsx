import React from 'react';
import PropTypes from 'prop-types';
import OptionFieldGroup from './OptionFieldGroup';

function buildYear(onChange){
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
      defaultOption="Year" />
  );
}

function buildDay(onChange){
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
      defaultOption="Day"/>
  );
}

function buildMonth(onChange){
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
      defaultOption="Month" />
  );
}

const DatePicker = ({onChange}) => {
  return (
    <div>
      {buildMonth(onChange)}
      {buildDay(onChange)}
      {buildYear(onChange)}
    </div>
  );
};

export default DatePicker;