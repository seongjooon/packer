import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';
import { getDataReducer } from '../reducers';
import Header from '../components/common/Header';
import MainPage from '../pages/MainPage';
import CardPage from '../pages/CardPage';
import InputFormPage from '../pages/InputFormPage';

describe('<App />', () => {
  describe('should be render according to the route', () => {
    let mockStore;
    let mockState;

    beforeEach(() => {
      mockStore = configureMockStore();
      mockState = { getDataReducer };
    });

    it('/ redirect to /main', () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find(MainPage)).toHaveLength(1);
      expect(wrapper.find(CardPage)).toHaveLength(0);
      expect(wrapper.find(InputFormPage)).toHaveLength(0);
    });

    it('/card', () => {
      let store = mockStore(mockState);
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/card']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find(MainPage)).toHaveLength(0);
      expect(wrapper.find(CardPage)).toHaveLength(1);
      expect(wrapper.find(InputFormPage)).toHaveLength(0);
    });

    it('/input', () => {
      let store = mockStore(mockState);
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={['/input']}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(Header)).toHaveLength(1);
      expect(wrapper.find(MainPage)).toHaveLength(0);
      expect(wrapper.find(CardPage)).toHaveLength(0);
      expect(wrapper.find(InputFormPage)).toHaveLength(1);
    });
  });
});
