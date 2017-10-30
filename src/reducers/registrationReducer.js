import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      console.log('Registration successful.');
      return true;

    case types.REGISTER_FAILURE:
      console.log('Registration failed.');
      return false;

    default:
      return state;
  }
}
