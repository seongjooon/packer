import React from 'react';
import './InputFormTemplate.scss';

const InputFormTemplate = ({ children }) => {
  return (
    <div className="InputForm-Template">
      <div className='InputForm_wrapper'>{children}</div>
    </div>
  );
};

export default InputFormTemplate;
