import axios from 'axios';
import { APP_PROD } from '../../helper/env';

export const getTrendingCity = (sort, sortType, limit) => {
  return {
    type: 'GET_CITY_TRENDING',
    payload: axios({
      method: 'GET',
      url: `${APP_PROD}city/public?sort=${sort}&sortType=${sortType}&limit=${limit}`
    })
  };
};
