import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  popup: false,
  message: '',
  loading: false,
  announcementFetchError: false,
  announcementFetchMessage: '',
  announcements: [],
};

export default function announcementReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_ANNOUNCEMENT_SUCCESS:
      return {
        popup: false,
        message: '',
        loading: false,
        announcementFetchError: false,
        announcementFetchMessage: '',
        announcements: state.announcements.concat([action.announcement])
      };

    case types.CREATING_ANNOUNCEMENT:
      return {
        ...state,
        popup: true
      };

    case types.CREATE_ANNOUNCEMENT_FAILURE:
      return INITIAL_STATE;

    case types.GET_ANNOUNCEMENTS_FETCH:
      return {
        ...state,
        loading: true,
      };

    case types.GET_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        announcements: action.announcements,
        loading: false,
      };

    case types.GET_ANNOUNCEMENTS_FAILURE:
      return INITIAL_STATE;

    default:
      return state;
  }
}
