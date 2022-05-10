import { combineReducers } from 'redux';

import trending from './trending';
import detailUser from './userDetail';
import topDestination from './topDestination';
import myBookings from './myBooking';

export default combineReducers({
  trending,
  detailUser,
  topDestination,
  myBookings
});
