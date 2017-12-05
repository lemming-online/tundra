import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  groupsCreatedCount: 0,
  popup: false,
  loading: true,
};

export default function registrationReducer(state = INITIAL_STATE, action) {
  const count = state.groupsCreatedCount + 1;
  switch (action.type) {
    case types.CREATE_GROUP:
      console.log('Group creation successful.');
      return {
        ...state,
        groupsCreatedCount: count,
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

    default:
      return state;
  }
}
