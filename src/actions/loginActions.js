import * as types from './actionTypes';
import loginApi from '../api/loginApi';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
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
        throw error;
      });
  };
}
