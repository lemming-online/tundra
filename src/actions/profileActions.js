import * as types from './actionTypes';
import profileApi from '../api/profileApi';

function profilePictureSuccess() {
  return { type: types.PROFILE_PICTURE_SUCCESS };
}

function profilePictureFailure() {
  return { type: types.PROFILE_PICTURE_FAILURE };
}

function profilePictureUpload() {
  return { type: types.PROFILE_PICTURE_UPLOAD };
}

export function setProfilePicture(credentials) {
  return ((dispatch)  => {
    dispatch(profilePictureUpload());
    return profileApi
      .login(credentials)
      .then((responseJson) => {
        localStorage.setItem('jwt', responseJson.token);
        dispatch(profilePictureSuccess());
      })
      .catch((error) => {
        console.error(error);
        dispatch(profilePictureFailure());
      });
  };
}

export function logOutUser() {
  localStorage.removeItem('jwt');
  return { type: types.LOG_OUT };
}
