import * as types from './actionTypes';
import SessionApi from '../api/sessionApi';

function helpQuestionSuccess() {
  return { type: types.HELP_QUESTION_SUCCESS };
}

function helpQuestionFailure() {
  return { type: types.HELP_QUESTION_FAILURE };
}

export default function createHelpQuestion(jwt, sectionId, details) {
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
