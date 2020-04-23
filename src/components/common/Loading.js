import React from 'react';
import { Wave } from 'better-react-spinkit';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading">
      <Wave size={80} />
    </div>
  );
};

export default Loading;
