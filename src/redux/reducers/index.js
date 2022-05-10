import { combineReducers } from 'redux';

import trending from './trending';
import topDestination from './topDestination';
import myBookings from './myBooking';

export default combineReducers({
  trending,
  topDestination,
  myBookings
});
