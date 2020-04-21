import React from 'react';
import './CardTemplate.scss';
import ProductCard from './ProductCard';
import ReviewCard from './ReviewCard';
import CoverImg from '../../images/coverimg.png';

const CardTemplate = () => {
  return (
    <div className="Card-Template">
      <ProductCard
        created_by="Card Label"
        title="Card Title"
        coverImage={CoverImg}
        rating={3}
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elits graitudegupo"
      />
      <ProductCard
        created_by="Card Label"
        title="Card Title"
        coverImage={CoverImg}
        rating={3}
      />
      <ProductCard
        created_by="Card Label"
        title="Card Title"
        coverImage={CoverImg}
      />
      <ReviewCard
        reviewer="John Doe"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elits graitudegupo"
        coverImage={CoverImg}
        rating={3}
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elits graitudegupo"
      />
    </div>
  );
};

export default CardTemplate;
