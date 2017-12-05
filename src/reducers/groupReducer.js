import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  groupsCreatedCount: 0,
  popup: false, // for creating groups
  menteePopup: false, // for adding users
  mentorPopup: false, // for adding mentors
};

export default function groupReducer(state = INITIAL_STATE, action) {
  const count = state.groupsCreatedCount + 1;
  switch (action.type) {
    case types.CREATE_GROUP:
      console.log('Group creation successful.');
      return {
        ...state,
        groupsCreatedCount: count,
        popup: false,
      };

    case types.GROUP_FAILURE:
      console.log('Group creation failure.');
      return {
        ...state,
      };

    case types.DISPLAY_CREATE_GROUP_FORM:
      return {
        ...state,
        popup: true,
      };

    case types.CLOSE_CREATE_GROUP_FORM:
      return {
        ...state,
        popup: false,
      };

    case types.CANCEL_INVITE_TO_GROUP:
      return {
        ...state,
        menteePopup: false,
        mentorPopup: false,
      };

    case types.ADD_MENTEE_TO_GROUP:
      return {
        ...state,
        menteePopup: false,
      };

    case types.ADD_MENTOR_TO_GROUP:
      return {
        ...state,
        mentorPopup: false,
      };
    case types.ADDING_MENTEES_TO_GROUP_IN_PROGRESS:
      return {
        ...state,
        menteePopup: true,
      };
    case types.ADDING_MENTORS_TO_GROUP_IN_PROGRESS:
      return {
        ...state,
        mentorPopup: true,
      };

    default:
      return state;
  }
}
