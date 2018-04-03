import * as types from '../actions/types';

const initialState = {
  isFetching: false,
  isUnStarring: false,
  list: [],
  error: null
};

const sortByName = () => (a, b) => a['full_name'] > b['full_name']
const sortByStatistics = key => (a, b) => a['statistics'][key] < b['statistics'][key]

function sortList(key, list) {
  if(key === 'name') {
    return list.sort(sortByName('full_name'))
  }
  return list.sort(sortByStatistics(key))
}

export default function(state = initialState, action){
  switch(action.type) {
    case types.STARRED_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.STARRED_FETCH_SUCCESS:
      return {
        isFetching: false,
        list: action.starred
      };
    case types.STARRED_FETCH_FAILURE:
      return {
        ...initialState,
        error: action.error
      };
    case types.UNSTAR_EDIT_REQUEST:
      return {
        ...state,
        isUnStarring: true,
      }
    case types.UNSTAR_EDIT_SUCCESS:
      return {
        ...state,
        isUnStarring: false,
        list: state.list.filter((item) => item.id != action.influencer.id)
      }
    case types.UNSTAR_EDIT_FAILURE:
      return {
        ...state,
        isUnStarring: false,
        error: action.error
      }
    case types.STAR_EDIT_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.influencer]
      }
    case types.SORT_LIST:
      return {
        ...state,
        list: sortList(action.key, state.list.slice())
      }
    default:
      return state;
  };
}
