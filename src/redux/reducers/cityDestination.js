const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const destinationCityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DESTINATION_CITY_PENDING':
      return { ...state, isLoading: true };
    case 'GET_DESTINATION_CITY_FULFILLED':
      return { ...state, isLoading: false, isError: false, data: action.payload.data };
    case 'GET_DESTINATION_CITY_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default destinationCityReducer;
