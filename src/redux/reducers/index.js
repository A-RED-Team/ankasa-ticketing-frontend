import { combineReducers } from 'redux';

import booking from './booking';
import city from './city';
import flight from './flight';
import user from './user';

export default combineReducers({
  booking,
  city,
  flight,
  user
});
