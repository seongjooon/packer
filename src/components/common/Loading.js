import React from 'react';
import GridLoader from 'react-spinners/GridLoader';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <GridLoader color="rgb(100, 100, 100)" />
    </div>
  );
};

export default Loading;
