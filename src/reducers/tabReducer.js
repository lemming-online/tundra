import * as types from '../actions/actionTypes';

const INITIAL_STATE = {
  pane_type: 'session',
  tabs: [],
  openTab: ''
};

export default function tabReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        pane_type: action.pane_type,
        openTab: action.openTab
      };
    case types.OPEN_TAB:
      return {
        tabs: state.tabs.concat([{ title: action.title, id: action.openTab, pane_type: action.pane_type }]),
        pane_type: action.pane_type,
        openTab: action.openTab
      };
    case types.CLOSE_TAB:
      return {
        tabs: state.tabs.slice(0, state.tabs.length - 1),
        pane_type: state.tabs['session'],
        openTab: 'session'
      };
    default:
      return state;
  }
}
