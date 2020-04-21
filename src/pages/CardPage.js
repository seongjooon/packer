import React from 'react';
import CardItem from '../components/card/CardItem';

const CardPage = () => {
  return (
    <div className="Card_Page">
      <CardItem additions="comment" />
      <CardItem additions="rating" />
      <CardItem />
    </div>
  );
};

export default CardPage;
