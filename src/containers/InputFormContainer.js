import React, { useState } from 'react';
import InputForm from '../components/input/InputForm';

const InputFormContainer = () => {
  const [comment, setComment] = useState('');
  // 추후 comment가 존재한다면 useEffect를 통해 setComment 하도록 하기

  const handleChangeComment = (e) => {
    const { value, name } = e.target;
    if (name === 'content_text') setComment(value);
  };

  return (
    <div>
      <InputForm comment={comment} onChange={handleChangeComment} />
      {/* <InputForm type="disabled" />
      <InputForm type="readonly" comment="추가적인 요청사항 없이 배송됩니다" /> */}
    </div>
  );
};

export default InputFormContainer;
