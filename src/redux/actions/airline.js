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
