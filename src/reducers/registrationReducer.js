import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isRegistered: false,
  successMessage: '',
  failMessage: '',
  loading: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.REGISTER_FETCH:
      console.log('Registration fetch.');
      return {
        ...INITIAL_STATE,
        loading: true,
      };

    case types.REGISTER_SUCCESS:
      console.log('Registration successful.');
      return {
        ...state,
        isRegistered: true,
        loading: false,
        successMessage:
          'Great! Check your email for an activation link, then come back to lemming.online.',
      };

    case types.REGISTER_FAILURE:
      console.log('Registration failed.');
      return {
        ...state,
        isRegistered: false,
        loading: false,
        failMessage: "Oops! We couldn't register this account. Please try again.",
      };

    default:
      return state;
  }
}
