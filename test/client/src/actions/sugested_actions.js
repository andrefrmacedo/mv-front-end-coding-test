import axios from 'axios';
import * as types from './types';

function fetchSugestedRequest() {
  return {
    type: types.SUGESTED_FETCH_REQUEST
  }
}

function fetchSugestedSuccess(sugested) {
  return {
    type: types.SUGESTED_FETCH_SUCCESS,
    sugested
  }
}

function fetchSugestedFailure(error) {
  return {
    type: types.SUGESTED_FETCH_FAILURE,
    error
  }
}

export function fetchSugested() {
  return dispatch => {
    dispatch(fetchSugestedRequest())

    // this url would be different in production. 
    // Ideally we would have this url defined as a environment variable
    return axios.get('http://localhost:3000/sugested/')
    .then(response => {
      dispatch(fetchSugestedSuccess(response.data))
    })
    .catch(error => {
      dispatch(fetchSugestedFailure(error.response.data.errors))
    })
  }
}
