import * as types from './actionTypes';
import loginApi from '../api/loginApi';

function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

function loginFailure() {
  return { type: types.LOG_IN_FAILURE };
}

export function logInUser(credentials) {
  return function goLoginApi(dispatch) {
    return loginApi
      .login(credentials)
      .then((response) => {
        localStorage.setItem('jwt', response.token);
        dispatch(loginSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(loginFailure());
      });
  };
}

export function logOutUser() {
  localStorage.removeItem('jwt');
  return { type: types.LOG_OUT };
}
