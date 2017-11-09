import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  hasCreatedQuestion: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.HELP_QUESTION_SUCCESS:
      console.log('Successfully created question');
      return {
        ...state,
        hasCreatedQuestion: true,
      };

    case types.SECTION_FAILURE:
      console.log('Question was not created.');
      return {
        ...state,
      };

    default:
      return state;
  }
}
