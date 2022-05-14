const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const detailFlightReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAIL_FLIGHT_PENDING':
      return { ...state, isLoading: true };
    case 'GET_DETAIL_FLIGHT_FULFILLED':
      return { ...state, isLoading: false, isError: false, data: action.payload.data };
    case 'GET_DETAIL_FLIGHT_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default detailFlightReducer;
