import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({name, value, label, error, type, onChange, placeholder, styles}) => {
  return(
    <div className={classnames(styles, {"has-error": error})}>
      <label className="control-label">{label}</label>
      <input 
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="form-control"/>
      {error && <span className="help-block">{error}</span>}
    </div>
  );
};

TextFieldGroup.prototype = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;

