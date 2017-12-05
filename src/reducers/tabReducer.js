import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  pane: 'session',
  tabs: [],
};

export default function tabReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        pane: action.pane,
      };
    case types.OPEN_TAB:
      state.tabs.push({
        title: action.title,
        pane: action.pane,
      });
      return {
        tabs: state.tabs,
        pane: action.pane,
      };
    case types.CLOSE_TAB:
      state.tabs.pop();
      return {
        ...state,
        pane: 'session',
      };
    default:
      return state;
  }
}
