import axios from '../../utils/axios';

export const addAirlines = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`airline`, data, {
        headers: {
          'Content-Type': `multipart/form-data`
        }
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const getAllAirlines = () => {
  return {
    type: 'GET_ALL_AIRLINES',
    payload: axios({
      url: `airline-active`,
      method: 'GET'
    })
  };
};
