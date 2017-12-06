import * as types from './actionTypes';
import loginApi from '../api/loginApi';

function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

function loginFailure() {
  return { type: types.LOG_IN_FAILURE };
}

function loginFetch() {
  return { type: types.LOG_IN_FETCH };
}

function userDetailsFetch() {
  return { type: types.USER_DETAILS_FETCH };
}

function userDetailsSuccess(groups) {
  return { type: types.USER_DETAILS_SUCCESS, groups };
}

function userDetailsFailure() {
  return { type: types.USER_DETAILS_FAILURE };
}

function userImagePost(image) {
  return { type: types.USER_IMAGE_POST, image };
}

function userImagePostSuccess(imageURL) {
  return { type: types.USER_IMAGE_POST_SUCCESS, imageURL };
}

function userImagePostFailure() {
  return { type: types.USER_IMAGE_FAILURE };
}

export function logInUser(credentials) {
  return (dispatch) => {
    dispatch(loginFetch());
    return loginApi
      .login(credentials)
      .then((json) => {
        localStorage.setItem('jwt', json.token);
        dispatch(loginSuccess());
      })
      .catch((error) => {
        console.error(error);
        dispatch(loginFailure());
      });
  };
}

export function logOutUser() {
  localStorage.removeItem('jwt');
  return { type: types.LOG_OUT };
}

export function getMyDetails() {
  return (dispatch) => {
    dispatch(userDetailsFetch());
    return loginApi
      .getMyDetails()
      .then((json) => {
        // TODO: fuck
        console.log(json);
        dispatch(userDetailsSuccess(json.groups));
      })
      .catch((error) => {
        console.error(error);
        dispatch(userDetailsFailure());
      });
  };
}

export function postMyImage(image) {
  console.log(image);
  return (dispatch) => {
    dispatch(userImagePost());
    return loginApi
      .postMyImage(image)
      .then((json) => {
        console.log(json);
        dispatch(userImagePostSuccess(json.image));
      })
      .catch((error) => {
        console.error(error);
        dispatch(userImagePostFailure());
      });
  };
}
