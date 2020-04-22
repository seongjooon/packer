import cardItems from './../mock-data/cardItems';
import requestItems from './../mock-data/requestItems';

const data = { cardItems, requestItems };

export const getDataAPI = (dataName) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[dataName]);
    }, 1500);
  });
