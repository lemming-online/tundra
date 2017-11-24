import * as types from './actionTypes';

function createChangeTab(pane) {
  return { type: types.CHANGE_TAB, pane };
}

function createOpenTab(pane, title) {
  return { type: types.OPEN_TAB, pane, title };
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
  return pane;
}
