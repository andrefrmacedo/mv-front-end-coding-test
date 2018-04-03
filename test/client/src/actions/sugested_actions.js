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

function starEditRequest() {
  return {
    type: types.STAR_EDIT_REQUEST
  }
}

function starEditSuccess(influencer) {
  return {
    type: types.STAR_EDIT_SUCCESS,
    influencer
  }
}

function starEditFailure(error) {
  return {
    type: types.STAR_EDIT_FAILURE,
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

export function star(id) {
  return dispatch => {
    dispatch(starEditRequest())

    return axios.put(`http://localhost:3000/star/${id}`)
    .then(response => {
      dispatch(starEditSuccess(response.data))
    })
    .catch(error => {
      dispatch(starEditFailure(error.response.data.errors))
    })
  }
}
