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

function activateEmailSuccess() {
  return { type: types.ACTIVATE_EMAIL_SUCCESS };
}

function activateEmailFailure() {
  return { type: types.ACTIVATE_EMAIL_FAILURE };
}

function clearActivationAction() {
  return { type: types.CLEAR_EMAIL_ACTIVATION };
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

export function activateEmail(token) {
  return (dispatch) => {
    registerApi
      .activate(token)
      .then(json => dispatch(activateEmailSuccess()))
      .catch((error) => {
        console.error(error);
        dispatch(activateEmailFailure());
      });
  };
}

export function clearActivation() {
  return (dispatch) => {
    dispatch(clearActivationAction());
  }
}