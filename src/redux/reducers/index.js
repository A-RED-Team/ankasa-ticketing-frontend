import { combineReducers } from 'redux';

import trending from './trending';
import detailUser from './userDetail';
import topDestination from './topDestination';
import detailBooking from './detailBooking';
import myBookings from './myBooking';
import getAirlines from './airline';
import detailFlightReducer from './flight';
import allCountry from './country';
import allFlight from './allFlight';

export default combineReducers({
  trending,
  topDestination,
  detailBooking,
  detailUser,
  myBookings,
  getAirlines,
  detailFlightReducer,
  allCountry,
  allFlight
});
