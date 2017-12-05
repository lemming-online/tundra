import * as types from './actionTypes';

function createChangeTab(pane) {
  return { type: types.CHANGE_TAB, pane };
}

function createOpenTab(pane, title) {
  return { type: types.OPEN_TAB, pane, title };
}

function createCloseTab(pane) {
  return { type: types.CLOSE_TAB, pane };
}

export function changeTab(pane) {
  return (dispatch) => {
    dispatch(createChangeTab(pane));
  };
}

export function openTab(pane, title) {
  return (dispatch) => {
    dispatch(createOpenTab(pane, title));
  };
}

export function closeTab(pane) {
  return (dispatch) => {
    dispatch(createCloseTab(pane));
  };
}
