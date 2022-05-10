import { combineReducers } from 'redux';

import trending from './trending';
import topDestination from './topDestination';
import detailBooking from './detailBooking';

export default combineReducers({
  trending,
  topDestination,
  detailBooking
});
