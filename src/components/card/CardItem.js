import React from 'react';
import CoverImg from '../../images/coverimg.png';
import './CardItem.scss';

const CardItem = () => {
  return (
    <div className="ui_card">
      <div className="ui_card__imgcover">
        <img className="ui_card__img" src={CoverImg} alt="cover" />
      </div>
      <div className="ui_card__info">
        <span className="ui_card__label">Card Label</span>
        <span className="ui_card__title">Card Title</span>
        <div className="ui_card__foot">
          <span className="ui_card__hilight">Hilight</span>
          <span className="ui_card__cross-out">Cross out</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
