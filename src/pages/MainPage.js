import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.scss'

const MainPage = () => {
  return (
    <div className="Main-Page">
      <Link to="/card">Card</Link>
      <Link to="/input">Input</Link>
    </div>
  );
};

export default MainPage;