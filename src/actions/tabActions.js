import * as types from './actionTypes';

function createChangeTab(pane) {
  return { type: types.CHANGE_TAB, pane };
}

export function changeTab(pane) {
  return (dispatch) => {
    dispatch(createChangeTab(pane));
  };
}

export function closeTab(pane) {
  return pane;
}
