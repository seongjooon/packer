import React from 'react';
import PropTypes from 'prop-types';
import './InputForm.scss';
import { getByteSize } from '../../utils';

const InputForm = ({ type, defaultComment, text, onChange, totalByte }) => {
  return (
    <div className="ui_input_form">
      <div
        className={`ui_input_form__textarea ${
          type === 'input' && defaultComment !== text
            ? text && 'active-textarea'
            : ''
        }`}
      >
        <textarea
          className={`ui__textarea ${type}`}
          name="content_text"
          maxLength="500"
          placeholder="주문 요청사항을 입력해주세요"
          value={type === 'input' ? text || defaultComment : defaultComment}
          onChange={onChange}
          readOnly={type === 'disabled' || type === 'readonly'}
        />
        <em className="ui_textarea__chars">
          {type === 'input'
            ? totalByte ||
              (defaultComment && 500 - getByteSize(defaultComment)) ||
              500
            : 500}
        </em>
      </div>
      <button
        type="submit"
        className={`ui_textarea__btn ${
          type === 'input' && defaultComment !== text
            ? text && 'active-btn'
            : ''
        }`}
      >
        저장
      </button>
    </div>
  );
};

InputForm.defaultProps = {
  type: 'input',
  defaultComment: '',
  text: '',
  totalByte: 0
};

InputForm.propTypes = {
  type: PropTypes.string.isRequired,
  defaultComment: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  totalByte: PropTypes.number.isRequired
};

export default InputForm;
