import axios from '../../utils/axios';

export const getAllCities = () => {
  return {
    type: 'GET_ALL_CITIES',
    payload: axios({
      url: `city/public?limit=9999`,
      method: 'GET'
    })
  };
};
