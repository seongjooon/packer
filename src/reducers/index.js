import { combineReducers } from 'redux';
import { GET_CARD_ITEMS, GET_REQUEST_ITEMS } from '../constants';

const initialState = {
  cardItems: [],
  requestItems: []
};

export const getDataReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_CARD_ITEMS:
      return { ...state, cardItems: payload };
    case GET_REQUEST_ITEMS:
      return { ...state, requestItems: payload };
    default:
      return state;
  }
};

export default combineReducers({ getDataReducer });
