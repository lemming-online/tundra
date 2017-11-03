import * as types from './actionTypes';
import sectionApi from '../api/sectionApi';

function createSectionAction() {
  return { type: types.CREATE_SECTION };
}

function sectionFailureAction() {
  return { type: types.SECTION_FAILURE };
}

export default function createSection(details, id) {
  return function goCreateSection(dispatch) {
    return sectionApi
      .createSection(details, id)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createSectionAction());
      })
      .catch((error) => {
        console.error(error);
        dispatch(sectionFailureAction());
      });
  };
}
