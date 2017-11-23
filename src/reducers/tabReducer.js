import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  pane: 'session',
};

export default function tabReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        pane: action.pane,
      };
    default:
      return state;
  }
}
