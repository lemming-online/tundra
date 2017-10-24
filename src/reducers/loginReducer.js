// TODO: Determine if this is still needed.
// import { BrowserRouter } from 'react-router-dom';
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.isAuthenticated, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      // BrowserRouter.push('/');
      return !!sessionStorage.jwt;
    default:
      return state;
  }
}
