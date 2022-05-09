import { combineReducers } from 'redux';

import booking from './booking';
import cityTrending from './cityTrending';
import flight from './flight';
import user from './user';

export default combineReducers({
  booking,
  cityTrending,
  flight,
  user
});
