import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  popup: false,
  instructors: [],
  message: '',
};

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FEEDBACK_SUCCESS:
      console.log('Feedback was created successfully');
      return INITIAL_STATE;

    case types.CREATING_FEEDBACK:
      console.log('Creating feedback');
      return {
        ...state,
        popup: true,
      };

    case types.FEEDBACK_FAILURE:
      console.log('Feedback failed to be created');
      return INITIAL_STATE;

    default:
      return state;
  }
}
