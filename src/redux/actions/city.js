import axios from '../../utils/axios';

export const getAllCity = () => {
  return {
    type: 'GET_ALL_CITY',
    payload: axios({
      url: `city?sortField&sortType&page=&limit=&search=`,
      method: 'GET'
    })
  };
};

export const getCityTrending = () => {
  return {
    type: 'GET_TRENDING_CITY',
    payload: axios({
      url: `city/public`,
      method: 'GET'
    })
  };
};

export const getCityDestination = () => {
  return {
    type: 'GET_DESTINATION_CITY',
    payload: axios({
      url: `city/public?sortField=cities.created_at&sortType=ASC&page=&limit=10`,
      method: 'GET'
    })
  };
};

export const getDetailCity = () => {
  return {
    type: 'GET_DETAIL_CITY',
    payload: axios({
      url: `city/detail`,
      method: 'GET'
    })
  };
};

// export const postInsertCity = () => {
//   return new Promise((resolve, reject) => {
//     axios
//       .post(`${APP_PROD}city`, body, {
//         headers: {
//           token: token,
//           'Content-Type': 'multipart/form-data'
//         }
//       })
//       .then((response) => resolve(response))
//       .catch((err) => reject(err));
//   });
// };
