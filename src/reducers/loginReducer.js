// TODO: Determine if the following is still needed.
// import { BrowserRouter } from 'react-router-dom';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.isAuthenticated, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      // BrowserRouter.push('/');
      console.log('Login successful.');
      return !!localStorage.jwt;

    case types.LOG_IN_FAILURE:
      // BrowserRouter.push('/');
      console.log('Login failed.');
      return false;

    default:
      return state;
  }
}
