import * as types from './actionTypes';
import sectionApi from '../api/sectionApi';

function createSectionAction() {
  return { type: types.CREATE_SECTION };
}

function displayCreateSectionFormAction() {
  return { type: types.DISPLAY_CREATE_GROUP_FORM };
}

export function createSection(details, id) {
  return function goCreateSection(dispatch) {
    return sectionApi
      .createSection(details, id)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createSectionAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function displayCreateSectionForm() {
  return function goDisplaySectionForm(dispatch) {
    return dispatch(displayCreateSectionFormAction());
  };
}
