import * as types from './actionTypes';
import groupApi from '../api/groupApi';

function createGroupAction() {
  return { type: types.CREATE_GROUP };
}

function displayCreateGroupFormAction() {
  return { type: types.DISPLAY_CREATE_GROUP_FORM };
}

function cancelCreateGroupFormAction() {
  return { type: types.CLOSE_CREATE_GROUP_FORM };
}

export function createGroup(details, id) {
  return function goCreateGroup(dispatch) {
    return groupApi
      .createGroup(details, id)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createGroupAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function displayCreateGroupForm() {
  return function goDisplayGroupForm(dispatch) {
    return dispatch(displayCreateGroupFormAction());
  };
}

export function cancelCreateGroupForm() {
  return function goCancelGroupForm(dispatch) {
    return dispatch(cancelCreateGroupFormAction());
  };
}
