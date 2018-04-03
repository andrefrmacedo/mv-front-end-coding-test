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

function unStarEditRequest() {
  return {
    type: types.UNSTAR_EDIT_REQUEST
  }
}

function unStarEditSuccess(influencer) {
  return {
    type: types.UNSTAR_EDIT_SUCCESS,
    influencer
  }
}

function unStarEditFailure(error) {
  return {
    type: types.UNSTAR_EDIT_FAILURE,
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

export function unStar(id) {
  return dispatch => {
    dispatch(unStarEditRequest())

    return axios.put(`http://localhost:3000/unstar/${id}`, {})
    .then(response => {
      dispatch(unStarEditSuccess(response.data))
    })
    .catch(error => {
      dispatch(unStarEditFailure(error.response.data.errors))
    })
  }
}
