import React from 'react';
import ProductCard from './ProductCard';
import ReviewCard from './ReviewCard';
import CoverImg from '../../images/coverimg.png';

const CardTemplate = () => {
  return (
    <div>
      <ProductCard
        created_by="Card Label"
        title="Card Title"
        coverImage={CoverImg}
        rating={3}
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit"
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
        title="Review Title"
        coverImage={CoverImg}
        rating={3}
        comment="Lorem ipsum dolor sit amet consectetur adipisicing elit"
      />
    </div>
  );
};

export default CardTemplate;
