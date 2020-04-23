import { initialState, getDataReducer } from '../reducers';
import { GET_CARD_ITEMS, GET_REQUEST_ITEMS } from '../constants/index';
import cardItems from '../mock-data/cardItems';
import requestItems from '../mock-data/requestItems';

describe('reducers', () => {
  it('should return init value', () => {
    expect(initialState).toHaveProperty('cardItems');
    expect(initialState).toHaveProperty('requestItems');
    expect(initialState.cardItems).toEqual([]);
    expect(initialState.requestItems).toEqual([]);
    expect(getDataReducer(undefined, {})).toEqual(initialState);
  });

  describe('data of action should return equal value', () => {
    it('in getDataReducer', () => {
      expect(
        getDataReducer(initialState, {
          type: GET_CARD_ITEMS,
          payload: []
        })
      ).toEqual(initialState);
      expect(
        getDataReducer(initialState, {
          type: GET_CARD_ITEMS,
          payload: cardItems
        })
      ).toEqual({
        cardItems,
        requestItems: []
      });
      expect(
        getDataReducer(initialState, {
          type: GET_REQUEST_ITEMS,
          payload: []
        })
      ).toEqual(initialState);
      expect(
        getDataReducer(initialState, {
          type: GET_REQUEST_ITEMS,
          payload: requestItems
        })
      ).toEqual({
        cardItems: [],
        requestItems
      });
    });
  });
});
