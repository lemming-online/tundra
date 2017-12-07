import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

function createSessionAction() {
  return { type: types.CREATE_SESSION };
}

function displayCreateSessionFormAction() {
  return { type: types.DISPLAY_CREATE_SESSION_FORM };
}

function closeCreateSessionFormAction() {
  return { type: types.CLOSE_CREATE_SESSION_FORM };
}

function helpQuestionSuccess() {
  return { type: types.HELP_QUESTION_SUCCESS };
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

function archiveSessionAction() {
  return { type: types.ARCHIVE_SESSION };
}

function getLiveSessionAction() {
  return { type: types.GET_LIVE_SESSION };
}

function getArchivedSessionsAction() {
  return { type: types.GET_ARCHIVED_SESSIONS };
}

export function createHelpQuestion(jwt, groupId, details) {
  return function goCreateHelpQuestion(dispatch) {
    return SessionApi.addQuestionToQueue(jwt, groupId, details)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(helpQuestionSuccess());
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
        dispatch(createSessionAction());
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
        console.log(responseJson);
        dispatch(archiveSessionAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getLiveSession(groupId) {
  return function goGetLiveSession(dispatch) {
    dispatch(getLiveSessionAction());
  };
}

export function getArchivedSessions(groupId) {
  return function goGetArchivedSessions(dispatch) {
    dispatch(getArchivedSessions());
  };
}
