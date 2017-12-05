import * as types from './actionTypes';
import registerApi from '../api/registrationApi';

function registrationSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

function registrationFailureAction() {
  return { type: types.REGISTER_FAILURE };
}

function registrationFetch() {
  return { type: types.REGISTER_FETCH };
}

export function registerUser(credentials) {
  return (dispatch) => {
    dispatch(registrationFetch());
    registerApi
      .register(credentials)
      .then(json => dispatch(registrationSuccess()))
      .catch((error) => {
        console.error(error);
        dispatch(registrationFailureAction());
      });
  };
}

export function registrationFailure() {
  return (dispatch) => {
    dispatch(registrationFailureAction());
  };
}
