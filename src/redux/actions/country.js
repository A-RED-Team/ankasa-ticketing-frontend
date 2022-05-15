import axios from '../../utils/axios';

export const getAllCountries = () => {
  return {
    type: 'GET_ALL_COUNTRY',
    payload: axios({
      url: `country/public?limit=999`,
      method: 'GET'
    })
  };
};
