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

function addMentorToGroupAction() {
  return { type: types.ADD_MENTOR_TO_GROUP };
}

function addMenteeToGroupAction() {
  return { type: types.ADD_MENTEE_TO_GROUP };
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

export function addMentorToGroup() {
  return function goAddMentorToGroup(dispatch) {
    return dispatch(addMentorToGroupAction());
  };
}

export function addMenteeToGroup() {
  return function goAddMenteeToGroup(dispatch) {
    return dispatch(addMenteeToGroupAction());
  };
}
