import React from 'react';
import './ReviewCard.scss';
import Rating from 'react-rating';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const ReviewCard = ({ reviewer, title, coverImage, rating, comment }) => {
  return (
    <div className="ui_card--side">
      <div className="ui_card__imgcover">
        <img className="ui_card__img" src={coverImage} alt="cover" />
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
              <span className="ui_card__reviewer"> | {reviewer}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
