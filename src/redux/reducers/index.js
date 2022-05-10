import { combineReducers } from 'redux';

import trending from './trending';
import topDestination from './topDestination';

export default combineReducers({
  trending,
  topDestination
});
