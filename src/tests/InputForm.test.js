import React from 'react';
import { shallow } from 'enzyme';
import InputForm from '../components/input/InputForm';

describe('InputForm', () => {
  describe('<InputForm />', () => {
    let wrapper, props;

    beforeEach(() => {
      props = {
        type: 'input',
        defaultComment:
          '항상 건강하시고 행복하세요. 그리고 주문시 요청사항 꼭 적어주세요:)',
        text: '',
        onChange: jest.fn(),
        totalByte: 0
      };
      wrapper = shallow(<InputForm {...props} />);
    });

    it('matches snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should contain elements', () => {
      expect(wrapper.find('textarea').length).toBe(1);
      expect(wrapper.find('button').length).toBe(1);
    });

    it('should not contain node', () => {
      props = {
        type: 'disabled',
        defaultComment: '',
        text: '',
        onChange: jest.fn(),
        totalByte: 0
      };
      wrapper = shallow(<InputForm {...props} />);
      expect(wrapper.find('.active-textarea').length).toBe(0);
      expect(wrapper.find('.active-btn').length).toBe(0);
    });
  });
});
