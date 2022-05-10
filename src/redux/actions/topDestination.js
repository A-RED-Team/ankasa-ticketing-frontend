import axios from '../../utils/axios';

export const getDestinationCity = (sort, sortType, limit) => {
  return {
    type: 'GET_CITY_DESTINATION',
    payload: axios({
      method: 'GET',
      url: `city/public?sort=${sort}&sortType=${sortType}&limit=${limit}`
    })
  };
};
