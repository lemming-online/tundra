import jwtDecode from 'jwt-decode';
import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  firstName: '',
  lastName: '',
};

export default function loginReducer(state = INITIAL_STATE, action) {
  const payload = jwtDecode(localStorage.jwt);
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      console.log('Login successful.');
      return {
        // ...state == the non explicitly stated parts of the state
        ...state,
        isAuthenticated: true,
        firstName: payload.fnm,
        lastName: payload.lnm,
      };

    case types.LOG_IN_FAILURE:
      console.log('Login failed.');
      return INITIAL_STATE;

    case types.LOG_OUT:
      console.log('Log out.');
      return INITIAL_STATE;

    default:
      return state;
  }
}
