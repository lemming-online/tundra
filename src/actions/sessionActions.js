import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

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

export function createHelpQuestion(jwt, sectionId, details) {
  return function goCreateHelpQuestion(dispatch) {
    return SessionApi.addQuestionToQueue(jwt, sectionId, details)
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

export function deleteHelpQuestion(sectionId, userId) {
  return function goDeleteHelpQuestion(dispatch) {
    return SessionApi.deleteQuestionFromQueue(sectionId, userId)
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