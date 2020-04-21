import React from 'react';
import './InputForm.scss';

const InputForm = ({ comment, onChange }) => {
  return (
    <div className="ui_input_form">
      <div className="ui_input_form__textarea">
        <textarea
          className="ui__textarea"
          name="content_text"
          maxLength={500}
          placeholder="주문 요청사항을 입력해주세요"
          value={comment}
          onChange={onChange}
        ></textarea>
        <em className="ui_textarea__chars">500</em>
      </div>
      <button type="submit" className="ui_textarea__btn" disabled={comment}>
        저장
      </button>
    </div>
  );
};

export default InputForm;
