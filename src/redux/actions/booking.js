import axios from '../../utils/axios';

export const payBooking = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`booking/payment/${data}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const cancelTheBooking = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .put(`booking/canceled/${data}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
export const createBooking = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`booking`, data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
