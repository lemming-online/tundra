// TODO: Determine if the following is still needed.
// import { BrowserRouter } from 'react-router-dom';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

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
