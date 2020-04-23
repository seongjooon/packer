import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { cardAction } from '../actions';
import PropTypes from 'prop-types';
import { getDataAPI } from '../api';
import ProductCard from '../components/card/ProductCard';
import ReviewCard from '../components/card/ReviewCard';

const CardContainer = ({ getCardData, cardItems }) => {
  const getData = useCallback(async () => {
    const cardItems = await getDataAPI('cardItems');
    getCardData(cardItems);
  }, [getCardData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {cardItems.length !== 0 &&
        cardItems.map((item, index) => {
          const { type } = item;
          if (type === 'product') {
            return <ProductCard key={index} {...item} />;
          } else if (type === 'review') {
            return <ReviewCard key={index} {...item} />;
          } else {
            return null;
          }
        })}
    </>
  );
};

CardContainer.defaultProps = {
  cardItems: []
};

CardContainer.propTypes = {
  getCardData: PropTypes.func.isRequired,
  cardItems: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  cardItems: state.getDataReducer.cardItems
});

const mapDispatchToProps = { getCardData: cardAction };

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
