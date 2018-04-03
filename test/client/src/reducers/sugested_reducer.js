import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  list: [],
  error: null
};

export default function(state = initialState, action){
  switch(action.type) {
    case types.SUGESTED_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.SUGESTED_FETCH_SUCCESS:
      return {
        isFetching: false,
        list: action.sugested
      };
    case types.SUGESTED_FETCH_FAILURE:
      return {
        ...initialState,
        error: action.error
      };
    default:
      return state;
  };
}
