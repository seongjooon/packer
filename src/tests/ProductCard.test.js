import React from 'react';
import { shallow } from 'enzyme';
import ProductCard from '../components/card/ProductCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

describe('ProductCard', () => {
  describe('<ProductCard />', () => {
    let wrapper, props;

    beforeEach(() => {
      props = {
        title: 'Card Title',
        created_by: 'Card Label',
        cover_image: ''
      };
      wrapper = shallow(<ProductCard {...props} />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should contain elements (1)', () => {
      expect(
        wrapper.contains(
          <LazyLoadImage
            effect="blur"
            className="ui_card__img"
            src=""
            alt="cover"
          />
        )
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__label">Card Label</span>)
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__title">Card Title</span>)
      ).toBe(true);
      expect(wrapper.find('.ui_rating').length).toBe(0);
      expect(wrapper.find('.ui_card__comment').length).toBe(0);
    });

    it('should contain elements (2)', () => {
      props = {
        title: 'Title',
        created_by: 'Label',
        cover_image: 'IMG',
        rating: 3
      };
      wrapper = shallow(<ProductCard {...props} />);
      expect(
        wrapper.contains(
          <LazyLoadImage
            effect="blur"
            className="ui_card__img"
            src="IMG"
            alt="cover"
          />
        )
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__label">Label</span>)
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__title">Title</span>)
      ).toBe(true);
      expect(wrapper.find('.ui_rating').length).toBe(1);
      expect(wrapper.find('.ui_card__comment').length).toBe(0);
    });

    it('should contain elements (3)', () => {
      props = {
        title: 'ProductCard Title',
        created_by: 'Seongjoon Kim',
        cover_image: 'mountain',
        rating: 3,
        comment:
          'Lorem ipsum dolor sit amet consectetur adipisicing elits graitudegupo'
      };
      wrapper = shallow(<ProductCard {...props} />);
      expect(
        wrapper.contains(
          <LazyLoadImage
            effect="blur"
            className="ui_card__img"
            src="mountain"
            alt="cover"
          />
        )
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__label">Seongjoon Kim</span>)
      ).toBe(true);
      expect(
        wrapper.contains(
          <span className="ui_card__title">ProductCard Title</span>
        )
      ).toBe(true);
      expect(wrapper.find('.ui_rating').length).toBe(1);
      expect(wrapper.find('.ui_card__comment').length).toBe(1);
      expect(
        wrapper.contains(
          <span className="ui_card__comment">
            Lorem ipsum dolor sit amet consectetur adipisicing elits
            graitudegupo
          </span>
        )
      ).toBe(true);
    });
  });
});
