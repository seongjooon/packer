import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAction } from '../actions';
import { getDataAPI } from '../api';
import Loading from '../components/common/Loading';
import InputForm from '../components/input/InputForm';
import { getByteSize } from '../utils';

const InputFormContainer = ({ getRequestData, requestItems }) => {
  const [text, setText] = useState('');
  const [totalByte, setTotalByte] = useState(0);

  const getData = useCallback(async () => {
    const requestItems = await getDataAPI('requestItems');
    getRequestData(requestItems);
  }, [getRequestData]);

  useEffect(() => {
    getData();
  }, [getData]);

  const handleChangeComment = (e) => {
    const { value, name } = e.target;
    if (name === 'content_text') {
      const byte = getByteSize(value);
      if (byte <= 500) {
        setText(value);
        setTotalByte(500 - byte);
      } else {
        setText(value.substr(0, 499));
        setTotalByte(0);
      }
    }
  };

  if (requestItems.length === 0) return <Loading />;

  return (
    <>
      {requestItems.length !== 0 &&
        requestItems.map((item, index) => {
          const { type, comment } = item;
          return (
            <InputForm
              key={index}
              type={type}
              defaultComment={comment}
              text={text}
              onChange={handleChangeComment}
              totalByte={totalByte}
            />
          );
        })}
    </>
  );
};

InputFormContainer.defaultProps = {
  requestItems: []
};

InputFormContainer.propTypes = {
  getRequestData: PropTypes.func.isRequired,
  requestItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  requestItems: state.getDataReducer.requestItems
});

const mapDispatchToProps = { getRequestData: requestAction };

export default connect(mapStateToProps, mapDispatchToProps)(InputFormContainer);
