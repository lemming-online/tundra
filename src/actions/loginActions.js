import * as types from './actionTypes';
import loginApi from '../api/loginApi';

export function loginSuccess() {
  return { type: types.LOG_IN_SUCCESS };
}

export function loginFailure() {
  return { type: types.LOG_IN_FAILURE };
}

export function logInUser(credentials) {
  return function goLoginApi(dispatch) {
    return loginApi
      .login(credentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem('jwt', response.token);
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
        throw error;
      });
  };
}
