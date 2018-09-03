import React from 'react';
import PropTypes from 'prop-types';
import OptionFieldGroup from './OptionFieldGroup';

const GenderPicker = ({checked, onChange}) => {
  return (
    <div>
      <div>
        <label>Male</label>
        <input onChange={onChange} 
          checked={checked === "M"}
          type="radio" 
          name="gender" 
          value="M"/>
      </div>
      <div>
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