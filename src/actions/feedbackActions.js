import * as types from './actionTypes';

function createFeedbackSuccess() {
  return { type: types.FEEDBACK_SUCCESS };
}

function creatingFeedbackForm() {
  return { type: types.CREATING_FEEDBACK };
}

function createFeedbackFailure() {
  return { type: types.FEEDBACK_FAILURE };
}

export function feedbackSuccess() {
  return function goFeedbackSuccess(dispatch) {
    dispatch(createFeedbackSuccess());
  };
}

export function feedbackInProgress() {
  return function goFeedbackInProgress(dispatch) {
    dispatch(creatingFeedbackForm());
  };
}

export function feedbackFailure() {
  return function goFeedbackFailure(dispatch) {
    dispatch(createFeedbackFailure());
  };
}
