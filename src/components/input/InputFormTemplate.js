import React from 'react';
import PropTypes from 'prop-types';
import './InputFormTemplate.scss';

const InputFormTemplate = ({ children }) => {
  return (
    <div className="InputForm-Template">
      <div className="InputForm_wrapper">{children}</div>
    </div>
  );
};

InputFormTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default InputFormTemplate;
