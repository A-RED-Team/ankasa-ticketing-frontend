import { combineReducers } from 'redux';

import trending from './trending';
import detailUser from './userDetail';

export default combineReducers({
  trending,
  detailUser
});
