import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  groupsCreatedCount: 0,
  loading: true,
  peopleLoading: true,
  popup: false, // for creating groups
  menteePopup: false, // for adding users
  mentorPopup: false, // for adding mentors
  people: [],
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

    case types.GROUP_FETCH:
      return {
        ...state,
        loading: true,
      };

    case types.GROUP_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        group: action.group,
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

    case types.GET_PEOPLE_IN_GROUP_FETCH:
      return {
        ...state,
        peopleLoading: true,
      };

    case types.GET_PEOPLE_IN_GROUP:
      return {
        ...state,
        peopleLoading: false,
        people: action.json,
      };

    default:
      return state;
  }
}
