import axios from '../../utils/axios';

export const updateUser = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`/users/update/profile`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
