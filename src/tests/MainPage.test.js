import React from 'react';
import { shallow } from 'enzyme';
import MainPage from '../pages/MainPage';

describe('Main Pgae', () => {
  describe('<MainPage />', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<MainPage />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should contain elements', () => {
      const MainPageComponent = wrapper.find('.Main-Page');
      expect(MainPageComponent.length).toBe(1);
    });
  });
});
