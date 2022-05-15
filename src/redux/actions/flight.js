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
export const getAllFlight = (
  mode,
  deptCity,
  arrCity,
  deptDate,
  flightClass,
  oneOrRoundTrip,
  child,
  adult,
  airlinesName,
  luggage,
  meal,
  wifi,
  direct,
  transit,
  moreTransit,
  deptTimeFrom,
  deptTimeTo,
  arrTimeFrom,
  arrTimeTo
) => {
  return {
    type: 'GET_ALL_FLIGHT',
    payload: axios({
      method: 'GET',
      url: `flight-active?mode=${mode}&departureCity=${deptCity}&arrivalCity=${arrCity}&departureDate=${deptDate}&flightClass=${flightClass}&type=${oneOrRoundTrip}&child=${child}&adult=${adult}&airlinesName=${airlinesName}&luggage=${luggage}&meal=${meal}&wifi=${wifi}&direct=${direct}&transit=${transit}&moreTransit=${moreTransit}&departureTimeTo=${deptTimeTo}&departureTimeFrom=${deptTimeFrom}&arrivedTimeFrom=${arrTimeFrom}&arrivedTimeTo=${arrTimeTo}`
    })
  };
};
