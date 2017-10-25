import * as types from './actionTypes';
import registerApi from '../api/registrationApi';

function registrationSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

function registrationFailure() {
  return { type: types.REGISTER_FAILURE };
}

export function registerUser(credentials) {
  return function goRegisterApi(dispatch) {
    return registerApi
      .registerUser(credentials)
      .then((response) => {
        console.log(response);
        dispatch(registrationSuccess());
      })
      .catch((error) => {
        dispatch(registrationFailure());
        throw error;
      });
  };
}
