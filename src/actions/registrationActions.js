import * as types from './actionTypes';
import registerApi from '../api/registerApi';

function registrationSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

function registrationFailure() {
  return { type: types.REGISTER_FAILURE };
}

export function registerUser(credentials) {
  console.log(credentials);
}
