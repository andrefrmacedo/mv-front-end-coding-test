import { combineReducers } from 'redux';
import sugestedReducer from './sugested_reducer';
import starredReducer from './starred_reducer';

export default combineReducers({
  sugested: sugestedReducer,
  starred: starredReducer
})
