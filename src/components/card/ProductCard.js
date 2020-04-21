import React from 'react';
import './ProductCard.scss';
import Rating from 'react-rating';
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti';

const ProductCard = ({ created_by, title, coverImage, rating, comment }) => {
  return (
    <div className="ui_card">
      <div className="ui_card__imgcover">
        <img className="ui_card__img" src={coverImage} alt="cover" />
      </div>
      <div className="ui_card__info">
        <span className="ui_card__label">{created_by}</span>
        <span className="ui_card__title">{title}</span>
        <div className="ui_card__foot">
          <span className="ui_card__hilight">Hilight</span>
          <span className="ui_card__cross-out">Cross out</span>
        </div>
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
            {comment && <span className="ui_card__comment">{comment}</span>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
