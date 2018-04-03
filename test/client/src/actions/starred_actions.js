import axios from 'axios';
import * as types from './types';

function fetchStarredRequest() {
  return {
    type: types.STARRED_FETCH_REQUEST
  }
}

function fetchStarredSuccess(starred) {
  return {
    type: types.STARRED_FETCH_SUCCESS,
    starred
  }
}

function fetchStarredFailure(error) {
  return {
    type: types.STARRED_FETCH_FAILURE,
    error
  }
}

export function fetchStarred() {
  return dispatch => {
    dispatch(fetchStarredRequest())

    // this url would be different in production. 
    // Ideally we would have this url defined as a environment variable
    return axios.get('http://localhost:3000/starred/')
    .then(response => {
      dispatch(fetchStarredSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchStarredFailure(error.response.data.errors))
    })
  }
}
