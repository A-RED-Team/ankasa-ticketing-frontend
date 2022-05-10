const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const trendingCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TRENDING_CITY_PENDING':
      return { ...state, isLoading: true };
    case 'GET_TRENDING_CITY_FULFILLED':
      return { ...state, isLoading: false, isError: false, data: action.payload.data };
    case 'GET_TRENDING_CITY_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default trendingCityReducer;
