import { GET_CARD_ITEMS, GET_REQUEST_ITEMS } from '../constants';

export const cardAction = (cardItems) => ({
  type: GET_CARD_ITEMS,
  payload: cardItems
});

export const requestAction = (requestItems) => ({
  type: GET_REQUEST_ITEMS,
  payload: requestItems
});
