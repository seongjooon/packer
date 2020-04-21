import React from 'react';
import './InputForm.scss';

const InputForm = ({ type, defaultComment, comment, onChange, totalByte }) => {
  return (
    <div className="ui_input_form">
      <div
        className={`ui_input_form__textarea ${
          defaultComment !== comment && type !== 'readonly'
            ? comment && 'active-textarea'
            : ''
        }`}
      >
        <textarea
          className={`ui__textarea ${type}`}
          name="content_text"
          maxLength="500"
          placeholder="주문 요청사항을 입력해주세요"
          value={comment}
          onChange={onChange}
          readOnly={type === 'disabled' || type === 'readonly'}
        ></textarea>
        <em className="ui_textarea__chars">{totalByte || 500}</em>
      </div>
      <button
        type="submit"
        className={`ui_textarea__btn ${
          defaultComment !== comment && type !== 'readonly'
            ? comment && 'active-btn'
            : ''
        }`}
      >
        저장
      </button>
    </div>
  );
};

export default InputForm;
