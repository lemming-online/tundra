import * as types from './actionTypes';
import sectionApi from '../api/sectionApi';

function createSectionAction() {
  return { type: types.CREATE_SECTION };
}

export default function createSection(details, id) {
  return function goCreateSection(dispatch) {
    return sectionApi
      .createSection(details, id)
      .then((responseJson) => {
        console.log('hello success af');
        console.log(responseJson);
        dispatch(createSectionAction());
      })
      .catch((error) => {
        console.error(error);
      });
  };
}
