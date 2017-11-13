import * as types from './actionTypes';
import feedbackApi from '../api/feedbackApi';

function createFeedbackSuccess() {
  return { type: types.FEEDBACK_SUCCESS };
}

function creatingFeedbackForm() {
  return { type: types.CREATING_FEEDBACK };
}

function createFeedbackFailure() {
  return { type: types.FEEDBACK_FAILURE };
}

function selectDropDown() {
  return { type: types.DROPDOWN_SELECTED };
}

export function feedbackSuccess(content, sessionId, mentorId, jwt) {
  return function goFeedbackSuccess(dispatch) {
    console.log(`Action -- content: ${content} sessionID: ${sessionId} mentorID: ${mentorId}`);
    return feedbackApi
      .sendFeedback(content, sessionId, mentorId, jwt)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createFeedbackSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(createFeedbackFailure());
      });
  };
}

export function cancelFeedback() {
  return function goCancelFeedback(dispatch) {
    return dispatch(createFeedbackFailure());
  };
}

export function feedbackInProgress() {
  return function goFeedbackInProgress(dispatch) {
    dispatch(creatingFeedbackForm());
  };
}

export function dropdownSelected() {
  return function goSelectDropdown(dispatch) {
    dispatch(selectDropDown());
  };
}
