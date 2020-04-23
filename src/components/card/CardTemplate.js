import React from 'react';
import PropTypes from 'prop-types';
import './CardTemplate.scss';

const CardTemplate = ({ children }) => {
  return <div className="Card-Template">{children}</div>;
};

CardTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default CardTemplate;
