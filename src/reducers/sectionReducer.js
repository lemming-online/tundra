import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  sectionsCreatedCount: 0,
  popup: false,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  const count = state.sectionsCreatedCount + 1;
  switch (action.type) {
    case types.CREATE_SECTION:
      console.log('Section creation successful.');
      return {
        ...state,
        sectionsCreatedCount: count,
      };

    case types.SECTION_FAILURE:
      console.log('Section creation failure.');
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

    default:
      return state;
  }
}
