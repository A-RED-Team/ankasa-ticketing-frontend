import axios from '../../utils/axios';

export const getDetailFlight = (data) => {
  return {
    type: 'GET_DETAIL_FLIGHT',
    payload: axios({
      method: 'GET',
      url: `flight/${data}`
    })
  };
};
