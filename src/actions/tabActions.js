import * as types from './actionTypes';

function createChangeTab(pane_type, openTab) {
  return { type: types.CHANGE_TAB, pane_type, openTab };
}

function createOpenTab(pane_type, title, openTab) {
  return { type: types.OPEN_TAB, pane_type, title, openTab };
}

function createCloseTab(pane_type) {
  return { type: types.CLOSE_TAB, pane_type };
}

export function changeTab(pane_type, openTab) {
  return (dispatch) => {
    dispatch(createChangeTab(pane_type, openTab));
  };
}

export function openTab(pane_type, title, openTab) {
  return (dispatch) => {
    dispatch(createOpenTab(pane_type, title, openTab));
  };
}

export function closeTab(pane_type) {
  return (dispatch) => {
    dispatch(createCloseTab(pane_type));
    dispatch(createChangeTab('session'));
  };
}
