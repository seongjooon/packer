import React from 'react';
import './InputForm.scss';

const InputForm = ({ type, comment, onChange }) => {
  return (
    <div className="ui_input_form">
      <div className="ui_input_form__textarea">
        <textarea
          className={`ui__textarea ${type}`}
          name="content_text"
          maxLength={500}
          placeholder="주문 요청사항을 입력해주세요"
          value={comment}
          onChange={onChange}
          readOnly={type === 'disabled' || type === 'readonly'}
        ></textarea>
        <em className="ui_textarea__chars">500</em>
      </div>
      <button
        type="submit"
        className={`ui_textarea__btn ${
          type === 'readonly' || (comment && 'active-btn')
        }`}
      >
        저장
      </button>
    </div>
  );
};

export default InputForm;
