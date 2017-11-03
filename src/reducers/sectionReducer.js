import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  sectionsCreatedCount: 0,
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

    default:
      return state;
  }
}
