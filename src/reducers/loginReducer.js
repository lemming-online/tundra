import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function loginReducer(state = initialState.isAuthenticated, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      console.log('Login successful.');
      return !!localStorage.jwt;

    case types.LOG_IN_FAILURE:
      console.log('Login failed.');
      return !!localStorage.jwt;

    case types.LOG_OUT:
      console.log('Log out.');
      return !!localStorage.jwt;

    default:
      return state;
  }
}
