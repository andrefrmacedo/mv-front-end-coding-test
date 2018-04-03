import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  isStaring: false,
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
    case types.STAR_EDIT_REQUEST:
      return {
        ...state,
        isStarring: true,
      }
    case types.STAR_EDIT_SUCCESS:
      return {
        ...state,
        isStarring: false,
        list: state.list.filter((item) => item.id != action.influencer.id)
      }
    case types.STAR_EDIT_FAILURE:
      return {
        ...state,
        isStarring: false,
        error: action.error
      }
    case types.UNSTAR_EDIT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.influencer]
      }
    default:
      return state;
  };
}
