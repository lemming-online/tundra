import jwtDecode from 'jwt-decode';
import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  firstName: '',
  lastName: '',
  id: null,
  loginError: false,
  loginMessage: '',
  loading: false,
  uid: '',
  email: '',
};

export default function loginReducer(state = INITIAL_STATE, action) {
  let payload = '';
  // FIXME: may not need this in the future. better error handling when jwt is set would be good.
  if (localStorage.jwt != null && localStorage.jwt !== 'undefined') {
    payload = jwtDecode(localStorage.jwt);
  }
  switch (action.type) {
    case types.LOG_IN_FETCH:
      console.log('Login fetch.');
      return {
        // ...state == the non explicitly stated parts of the state
        ...state,
        loading: true,
      };

    case types.LOG_IN_SUCCESS:
      console.log('Login successful.');
      return {
        // ...state == the non explicitly stated parts of the state
        ...state,
        loading: false,
        isAuthenticated: true,
        firstName: payload.fnm,
        lastName: payload.lnm,
        email: payload.sub,
        uid: payload.uid,
      };

    case types.LOG_IN_FAILURE:
      console.log('Login failed.');
      return {
        // ...state == the non explicitly stated parts of the state
        ...state,
        loading: false,
        loginError: true,
        loginMessage: "Oops! We couldn't log you in. Please try again.",
      };
    // return INITIAL_STATE;

    case types.LOG_OUT:
      console.log('Log out.');
      return {
        // ...state == the non explicitly stated parts of the state
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
