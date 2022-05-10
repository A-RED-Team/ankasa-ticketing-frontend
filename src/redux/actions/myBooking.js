import axios from '../../utils/axios';

export const getMyBooking = () => {
  return {
    type: 'GET_MY_BOOKING',
    payload: axios({
      method: 'GET',
      url: `mybooking`
    })
  };
};
