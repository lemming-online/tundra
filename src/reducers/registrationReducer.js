import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function registrationReducer(state = initialState.isAuthenticated, action) {
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
