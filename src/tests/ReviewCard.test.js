import React from 'react';
import { shallow } from 'enzyme';
import ReviewCard from '../components/card/ReviewCard';

describe('ReviewCard', () => {
  describe('<ReviewCard />', () => {
    let wrapper, props;

    beforeEach(() => {
      props = {
        title: '상품 후기',
        created_by: 'John Doe',
        cover_image: '목걸이',
        rating: 3,
        comment: '목걸이가 반짝거리고 고급스럽게 이뻐요~'
      };
      wrapper = shallow(<ReviewCard {...props} />);
    });

    it('should contain elements', () => {
      expect(
        wrapper.contains(
          <img className="ui_card__img" src="목걸이" alt="cover" />
        )
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__reviewer"> | John Doe</span>)
      ).toBe(true);
      expect(
        wrapper.contains(<span className="ui_card__title">상품 후기</span>)
      ).toBe(true);
      expect(wrapper.find('.ui_rating').length).toBe(1);
      expect(wrapper.find('.ui_card__comment').length).toBe(1);
      expect(
        wrapper.contains(
          <span className="ui_card__comment">
            목걸이가 반짝거리고 고급스럽게 이뻐요~
          </span>
        )
      ).toBe(true);
    });
  });
});
