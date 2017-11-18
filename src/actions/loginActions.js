import * as types from './actionTypes';
import loginApi from '../api/loginApi';

function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

function loginFailure() {
  return { type: types.LOG_IN_FAILURE };
}

function fetchLogin() {
  return { type: types.LOG_IN_FETCH };
}

export function logInUser(credentials) {
  return function goLoginApi(dispatch) {
    dispatch(fetchLogin());
    return loginApi
      .login(credentials)
      .then((responseJson) => {
        localStorage.setItem('jwt', responseJson.token);
        dispatch(loginSuccess());
      })
      .then()
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
