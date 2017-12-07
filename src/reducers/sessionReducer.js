import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  hasCreatedQuestion: false,
  sessionFormPopup: false,
  hasSession: false,
  liveSession: [],
  archivedSessions: [],
};

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      return {
        ...state,
        hasSession: true,
        liveSession: action.json,
        sessionFormPopup: false,
      };
    case types.DISPLAY_CREATE_SESSION_FORM:
      return {
        ...state,
        sessionFormPopup: true,
      };

    case types.CLOSE_CREATE_SESSION_FORM:
      return {
        ...state,
        sessionFormPopup: false,
      };

    case types.HELP_QUESTION_SUCCESS:
      console.log('Successfully created question');
      return {
        ...state,
        hasCreatedQuestion: true,
      };

    case types.HELP_QUESTION_FAILURE:
      console.log('Question was not created.');
      return {
        ...state,
      };

    case types.DELETE_QUESTION_SUCCESS:
      console.log('Question was deleted successfully');
      return {
        ...state,
        hasCreatedQuestion: false,
      };

    case types.DELETE_QUESTION_FAILURE:
      console.log('Question was not deleted.');
      return {
        ...state,
      };

    case types.ARCHIVE_SESSION:
      return {
        ...state,
        hasSession: false,
        liveSession: [],
      };

    case types.GET_LIVE_SESSION:
      return {
        ...state,
        liveSession: action.json,
      };

    case types.GET_ARCHIVED_SESSIONS:
      return {
        ...state,
        archivedSessions: action.json,
      };

    default:
      return state;
  }
}
