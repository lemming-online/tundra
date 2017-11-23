import * as types from './actionTypes';
import registerApi from '../api/registrationApi';

function registrationSuccess() {
  return { type: types.REGISTER_SUCCESS };
}

function registrationFailure() {
  return { type: types.REGISTER_FAILURE };
}

function registrationFetch() {
  return { type: types.REGISTER_FETCH };
}

export default function registerUser(credentials) {
  return (dispatch) => {
    dispatch(registrationFetch());
    registerApi
      .register(credentials)
      .then(json => dispatch(registrationSuccess()))
      .catch((error) => {
        console.error(error);
        dispatch(registrationFailure());
      });
  };
}
