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

function addMentorToGroupFailureAction() {
  return { type: types.ADD_MENTOR_TO_GROUP_FAILURE };
}

function addMenteeToGroupFailureAction() {
  return { type: types.ADD_MENTEE_TO_GROUP_FAILURE };
}

function addResourceToGroupAction() {
  return { type: types.ADD_RESOURCE_TO_GROUP };
}

function addingMenteeToGroupAction() {
  return { type: types.ADDING_MENTEES_TO_GROUP_IN_PROGRESS };
}

function addingResourceToGroupAction() {
  return { type: types.ADDING_RESOURCE_TO_GROUP_IN_PROGRESS };
}

function addingMentorToGroupAction() {
  return { type: types.ADDING_MENTORS_TO_GROUP_IN_PROGRESS };
}

function cancelInviteAction() {
  return { type: types.CANCEL_INVITE_TO_GROUP };
}

function cancelResourceAction() {
  return { type: types.CANCEL_RESOURCE_TO_GROUP };
}

function getPeopleInGroupAction(json) {
  return { type: types.GET_PEOPLE_IN_GROUP, json };
}

function getResourcesInGroupAction(json) {
  return { type: types.GET_RESOURCES_IN_GROUP, json };
}

function removeErrorMessageAction() {
  return { type: types.REMOVE_ERROR_MESSAGE };
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
  return function goAddMentorToGroup(dispatch) {
    return groupApi
      .addMentorToGroup(body, groupID)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(addMentorToGroupAction());
      })
      .catch((error) => {
        dispatch(addMentorToGroupFailureAction());
        setTimeout(() => {
          dispatch(removeErrorMessageAction());
        }, 5000);
        console.error(error);
      });
  };
}

export function addResourceToGroup(body, groupID) {
  return function goAddResourceToGroup(dispatch) {
    return groupApi
      .addResourceToGroup(body, groupID)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(addResourceToGroupAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function addMenteesToGroup(body, groupID) {
  return function goAddMenteesToGroup(dispatch) {
    return groupApi
      .addMenteesToGroup(body, groupID)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(addMenteeToGroupAction());
      })
      .catch((error) => {
        dispatch(addMenteeToGroupFailureAction());
        setTimeout(() => {
          dispatch(removeErrorMessageAction());
        }, 5000);
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

export function addResourceToGroupInProgress() {
  return function goAddResourceToGroupInProgress(dispatch) {
    return dispatch(addingResourceToGroupAction());
  };
}

export function cancelInvite() {
  return function goCancelInvite(dispatch) {
    return dispatch(cancelInviteAction());
  };
}

export function cancelResource() {
  return function goCancelResource(dispatch) {
    return dispatch(cancelResourceAction());
  };
}

export function getPeopleInGroup(groupId) {
  return function goGetPeopleInGroup(dispatch) {
    return groupApi
      .getPeopleInGroup(groupId)
      .then((responseJson) => {
        dispatch(getPeopleInGroupAction(responseJson));
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getResourcesInGroup(groupId) {
  return function goGetResourcesInGroup(dispatch) {
    return groupApi
      .getResourcesInGroup(groupId)
      .then((responseJson) => {
        dispatch(getResourcesInGroupAction(responseJson));
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function removeErrorMessage() {
  return function goRemoveErrorMessage(dispatch) {
    return dispatch(removeErrorMessageAction());
  }
}
