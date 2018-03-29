import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isRegistered: false,
  successMessage: '',
  failMessage: '',
  loading: false,
  failedActivation: false,
  successfulActivation: false
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
          'Great! Check your email for an activation link, then come back to lemming.',
      };

    case types.REGISTER_FAILURE:
      console.log('Registration failed.');
      return {
        ...state,
        isRegistered: false,
        loading: false,
        failMessage: "Oops! We couldn't register this account. Please try again.",
      };

    case types.ACTIVATE_EMAIL_SUCCESS:
      return {
        ...state,
        successMessage: 'Email successfully activated.',
        successfulActivation: true
      }

    case types.ACTIVATE_EMAIL_FAILURE:
      return {
        ...state,
        failMessage: 'Email activation failed.',
        failedActivation: true
      }

    case types.CLEAR_EMAIL_ACTIVATION:
      return {
        ...state,
        failedActivation: false,
        successfulActivation: false,
        successMessage: '',
        failMessage: ''
      }

    default:
      return state;
  }
}
