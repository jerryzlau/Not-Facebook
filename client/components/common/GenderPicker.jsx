import React from 'react';
import PropTypes from 'prop-types';
import OptionFieldGroup from './OptionFieldGroup';

const GenderPicker = ({checked, onChange, error}) => {
  console.log(error);
  return (
    <div style={{width: '150px'}} className="flex-row">
      <div style={error && { border: '1px solid red'}}>
        <label>Male</label>
        <input onChange={onChange} 
          checked={checked === "M"}
          type="radio" 
          name="gender" 
          value="M"/>
      </div>
      <div style={error && { border: '1px solid red' }}>
        <label>Female</label>
        <input onChange={onChange} 
          checked={checked === "F"}
          type="radio" 
          name="gender" 
          value="F"/>
      </div>
    </div>
  );
};

GenderPicker.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default GenderPicker;