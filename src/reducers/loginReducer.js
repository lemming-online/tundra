import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: !!localStorage.jwt,
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      console.log('Login successful.');
      return {
        isAuthenticated: !!localStorage.jwt,
      };

    case types.LOG_IN_FAILURE:
      console.log('Login failed.');
      return {
        isAuthenticated: !!localStorage.jwt,
      };

    case types.LOG_OUT:
      console.log('Log out.');
      return {
        isAuthenticated: !!localStorage.jwt,
      };

    default:
      return state;
  }
}
