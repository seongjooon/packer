import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import './Header.scss';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul>
        <Link to="/card">
          <li>Card</li>
        </Link>
        <Link to="/input">
          <li>Input</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
