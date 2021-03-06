import axios from '../../utils/axios';

export const getTrendingCity = (sort, sortType, limit) => {
  return {
    type: 'GET_CITY_TRENDING',
    payload: axios({
      method: 'GET',
      url: `city/public?sort=${sort}&sortType=${sortType}&limit=${limit}`
    })
  };
};
