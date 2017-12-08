import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

function createSessionAction(json) {
  return { type: types.CREATE_SESSION, json };
}

function displayCreateSessionFormAction() {
  return { type: types.DISPLAY_CREATE_SESSION_FORM };
}

function closeCreateSessionFormAction() {
  return { type: types.CLOSE_CREATE_SESSION_FORM };
}

function helpQuestionSuccess(json) {
  return { type: types.HELP_QUESTION_SUCCESS, json };
}

function helpQuestionFailure() {
  return { type: types.HELP_QUESTION_FAILURE };
}

function deleteQuestionSuccess() {
  return { type: types.DELETE_QUESTION_SUCCESS };
}

function deleteQuestionFailure() {
  return { type: types.DELETE_QUESTION_FAILURE };
}

function archiveSessionAction(json) {
  return { type: types.ARCHIVE_SESSION, json };
}

function getLiveSessionAction(json) {
  return { type: types.GET_LIVE_SESSION, json };
}

function getArchivedSessionsAction(json) {
  return { type: types.GET_ARCHIVED_SESSIONS, json };
}

export function createHelpQuestion(groupId, details) {
  console.log(`groupId:${groupId}`);
  console.log(details);
  return function goCreateHelpQuestion(dispatch) {
    return SessionApi.addQuestionToQueue(groupId, details)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(helpQuestionSuccess(responseJson));
      })
      .catch((error) => {
        console.error(error);
        dispatch(helpQuestionFailure());
      });
  };
}

export function deleteHelpQuestion(groupId, userId) {
  return function goDeleteHelpQuestion(dispatch) {
    return SessionApi.deleteQuestionFromQueue(groupId, userId)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(deleteQuestionSuccess());
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteQuestionFailure());
      });
  };
}

export function createSession(body) {
  return function goCreateSession(dispatch) {
    return SessionApi.createSession(body)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createSessionAction(responseJson));
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function displayCreateSessionForm() {
  return function goDisplayCreatSessionFormAction(dispatch) {
    dispatch(displayCreateSessionFormAction());
  };
}

export function closeCreateSessionForm() {
  return function goCloseCreatSessionFormAction(dispatch) {
    dispatch(closeCreateSessionFormAction());
  };
}

export function archiveSession(groupId) {
  return function goArchiveSession(dispatch) {
    return SessionApi.archiveSession(groupId)
      .then((responseJson) => {
        dispatch(archiveSessionAction(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getLiveSession(groupId) {
  return function goGetLiveSession(dispatch) {
    return SessionApi.getLiveSession(groupId)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(getLiveSessionAction(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getArchivedSessions(groupId) {
  return function goGetArchivedSessions(dispatch) {
    return SessionApi.getArchivedSessions(groupId)
      .then((responseJson) => {
        dispatch(getArchivedSessionsAction(responseJson));
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
