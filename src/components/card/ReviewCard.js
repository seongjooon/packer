import React from 'react';
import PropTypes from 'prop-types';
import './ReviewCard.scss';
import Rating from 'react-rating';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const ReviewCard = ({ title, created_by, cover_image, rating, comment }) => {
  return (
    <div className="ui_card--side">
      <div className="ui_card__imgcover">
        <img className="ui_card__img" src={cover_image} alt="cover" />
      </div>
      <div className="ui_card__txtarea">
        <div className="ui_card__info">
          <span className="ui_card__title">{title}</span>
          {comment && <span className="ui_card__comment">{comment}</span>}
        </div>
        {rating && (
          <div className="ui_card__rating">
            <div className="ui_rating_wrapper">
              <Rating
                className="ui_rating"
                readonly
                initialRating={rating}
                emptySymbol={<TiStarOutline size="20px" />}
                fullSymbol={<TiStarFullOutline size="20px" />}
              />
              <span className="ui_card__reviewer"> | {created_by}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

ReviewCard.defaultProps = {
  title: 'untitle',
  created_by: 'unknown',
  cover_image: '',
  rating: 0,
  comment: ''
};

ReviewCard.propTypes = {
  title: PropTypes.string.isRequired,
  created_by: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string.isRequired
};

export default ReviewCard;
