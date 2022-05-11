import { combineReducers } from 'redux';

import trending from './trending';
import detailUser from './userDetail';
import topDestination from './topDestination';
import detailBooking from './detailBooking';
import myBookings from './myBooking';

export default combineReducers({
  trending,
  topDestination,
  detailBooking,
  detailUser,
  myBookings
});
