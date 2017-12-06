import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  hasCreatedQuestion: false,
  sessionFormPopup: false,
};

export default function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
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

    default:
      return state;
  }
}
