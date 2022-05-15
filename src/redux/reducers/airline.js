const initialState = {
  data: [],
  pageInfo: {},
  isError: false,
  isLoading: false,
  message: ''
};

export default function getAirlines(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_AIRLINES_PENDING':
      return {
        ...state,
        isError: false,
        isLoading: true,
        message: '',
        pageInfo: {}
      };
    case 'GET_ALL_AIRLINES_FULFILLED':
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: action.payload.data.data,
        message: action.payload.data.message
      };
    case 'GET_ALL_AIRLINES_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: action.payload.response.data,
        message: action.payload.response.data.message
      };
    }
    default:
      return state;
  }
}
