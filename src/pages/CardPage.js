import React from 'react';
import CardContainer from '../containers/CardContainer';
import CardTemplate from '../components/card/CardTemplate';

const CardPage = () => {
  return (
    <div className="Card_Page">
      <CardTemplate>
        <CardContainer />
      </CardTemplate>
    </div>
  );
};

export default CardPage;
