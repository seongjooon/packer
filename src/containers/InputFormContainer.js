import React, { useState, useEffect } from 'react';
import InputForm from '../components/input/InputForm';
import { getByteSize } from '../utils';

const InputFormContainer = () => {
  const [comment, setComment] = useState('');
  const [totalByte, setTotalByte] = useState(500);

  useEffect(() => {
    setComment('안녕하세요.');
    const byte = getByteSize('안녕하세요.');
    setTotalByte(500 - byte);
  }, []);

  const handleChangeComment = (e) => {
    const { value, name } = e.target;
    if (name === 'content_text') {
      const byte = getByteSize(value);
      if (byte <= 500) {
        setComment(value);
        setTotalByte(500 - byte);
      } else {
        setComment(value.substr(0, 499));
        setTotalByte(0);
      }
      if (value === '') {
        setTotalByte(500);
      }
    }
  };

  return (
    <div>
      <InputForm
        comment={comment}
        onChange={handleChangeComment}
        totalByte={totalByte}
      />
      {/* <InputForm type="disabled" />
      <InputForm type="readonly" comment="추가적인 요청사항 없이 배송됩니다" /> */}
    </div>
  );
};

export default InputFormContainer;
