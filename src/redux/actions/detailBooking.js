import axios from '../../utils/axios';
// const token = localStorage.getItem('token');

export const getDetailBooking = (id) => {
  return {
    type: 'GET_DETAIL_BOOKING',
    payload: axios({
      url: `booking/byuser/${id}`,
      method: 'GET'
    })
  };
};
