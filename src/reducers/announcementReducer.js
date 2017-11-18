import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  popup: false,
  message: '',
  loading: false,
  announcementFetchError: false,
  announcementFetchMessage: '',
  announcements: [],
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_ANNOUNCEMENT_SUCCESS:
      console.log('Announcement was created successfully');
      return INITIAL_STATE;

    case types.CREATING_ANNOUNCEMENT:
      console.log('Creating Announcement');
      return {
        ...state,
        popup: true,
      };

    case types.CREATE_ANNOUNCEMENT_FAILURE:
      console.log('Announcement failed to be created');
      return INITIAL_STATE;

    case types.GET_ANNOUNCEMENTS_FETCH:
      console.log('Getting announcements');
      return {
        ...state,
        loading: true,
      };

    case types.GET_ANNOUNCEMENTS_SUCCESS:
      console.log('Fetched announcements');
      return {
        ...state,
        announcements: action.announcements,
        loading: false,
      };

    case types.GET_ANNOUNCEMENTS_FAILURE:
      console.log('Could not fetch announcements');
      return INITIAL_STATE;

    default:
      return state;
  }
}
