import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isRegistered: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REGISTER_SUCCESS:
      console.log('Registration successful.');
      return {
        ...state,
        isRegistered: true,
      };

    case types.REGISTER_FAILURE:
      console.log('Registration failed.');
      return {
        ...state,
        isRegistered: false,
      };

    default:
      return state;
  }
}
