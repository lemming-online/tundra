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

function fetchGroupByID(id) {
  return { type: types.GROUP_FETCH, id };
}

function fetchGroupByIDSuccess(group) {
  return { type: types.GROUP_FETCH_SUCCESS, group };
}

function addMentorToGroupAction() {
  return { type: types.ADD_MENTOR_TO_GROUP };
}

function addMenteeToGroupAction() {
  return { type: types.ADD_MENTEE_TO_GROUP };
}

function addingMenteeToGroupAction() {
  return { type: types.ADDING_MENTEES_TO_GROUP_IN_PROGRESS };
}

function addingMentorToGroupAction() {
  return { type: types.ADDING_MENTORS_TO_GROUP_IN_PROGRESS };
}

function cancelInviteAction() {
  return { type: types.CANCEL_INVITE_TO_GROUP };
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

export function fetchGroup(id) {
  console.log('now in fetchGroup()');
  return (dispatch) => {
    dispatch(fetchGroupByID(id));
    groupApi
      .fetchGroup(id)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(fetchGroupByIDSuccess(responseJson));
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

export function addMentorToGroup(body, groupID) {
  console.log(`groupID in Mentor: ${groupID}`);
  return function goAddMentorToGroup(dispatch) {
    return groupApi
      .addMentorToGroup(body, groupID)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(addMentorToGroupAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function addMenteeToGroup(body, groupID) {
  console.log(`groupID in Mentee: ${groupID}`);
  return function goAddMenteeToGroup(dispatch) {
    return groupApi
      .addMenteeToGroup(body, groupID)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(addMenteeToGroupAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function addMenteesToGroupInProgress() {
  return function goAddUsersToGroupInProgress(dispatch) {
    return dispatch(addingMenteeToGroupAction());
  };
}

export function addMentorsToGroupInProgress() {
  return function goAddUsersToGroupInProgress(dispatch) {
    return dispatch(addingMentorToGroupAction());
  };
}

export function cancelInvite() {
  return function goCancelInvite(dispatch) {
    return dispatch(cancelInviteAction());
  };
}
