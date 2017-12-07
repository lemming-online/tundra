import jwtDecode from 'jwt-decode';
import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  isAuthenticated: false,
  firstName: '',
  lastName: '',
  id: null,
  image: '',
  loginError: false,
  loginMessage: '',
  loading: false,
  uid: '',
  email: '',
  groups: [],
  detailError: '',
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
        ...state,
        loading: true,
      };

    case types.LOG_IN_SUCCESS:
      console.log('Login successful.');
      return {
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
        ...state,
        loading: false,
        loginError: true,
        loginMessage: "Oops! We couldn't log you in. Please try again.",
      };
    // return INITIAL_STATE;

    case types.LOG_OUT:
      console.log('Log out.');
      return {
        ...state,
        isAuthenticated: false,
      };

    case types.USER_DETAILS_FETCH:
      console.log('User details fetch.');
      return {
        ...state,
        loading: true,
      };

    case types.USER_DETAILS_SUCCESS:
      console.log('User details success.');
      return {
        ...state,
        loading: false,
        detailError: '',
        groups: action.json.groups,
        image: action.json.user.image,
      };

    case types.USER_DETAILS_FAILURE:
      console.log('User details failed.');
      return {
        ...state,
        loading: false,
        detailError: "Oops! We couldn't load your groups. Please try again.",
      };

    case types.USER_IMAGE_POST:
      console.log('Entered user image post.');
      return {
        ...state,
      };

    case types.UPDATE_PASSWORD:
      console.log('password was updated');
      return {
        ...state,
      };

    case types.USER_IMAGE_POST_SUCCESS:
      console.log('Entered user image post.');
      return {
        ...state,
        image: `//${action.image}`,
      };

    default:
      return state;
  }
}
