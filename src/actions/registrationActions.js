import * as types from './actionTypes';
import registerApi from '../api/registrationApi';

function registrationSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

function registrationFailure() {
  return { type: types.REGISTER_FAILURE };
}

export default function registerUser(credentials) {
  return function goRegisterApi(dispatch) {
    return registerApi
      .register(credentials)
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
