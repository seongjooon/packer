import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { cardAction } from '../actions';
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
          const { type, title, created_by, image, rating, comment } = item;
          if (type === 'product') {
            return (
              <ProductCard
                key={index}
                title={title}
                created_by={created_by}
                coverImage={image}
                rating={rating}
                comment={comment}
              />
            );
          } else if (type === 'review') {
            return (
              <ReviewCard
                key={index}
                title={title}
                created_by={created_by}
                coverImage={image}
                rating={rating}
                comment={comment}
              />
            );
          } else {
            return null;
          }
        })}
    </>
  );
};

const mapStateToProps = (state) => ({
  cardItems: state.getDataReducer.cardItems
});

const mapDispatchToProps = { getCardData: cardAction };

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
