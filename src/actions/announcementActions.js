import * as types from './actionTypes';
import announcementApi from '../api/announcementApi';

function createAnnouncementSuccess() {
  return { type: types.CREATE_ANNOUNCEMENT_SUCCESS };
}

function announcementInProgress() {
  return { type: types.CREATING_ANNOUNCEMENT };
}

function createAnnouncementFailure() {
  return { type: types.CREATE_ANNOUNCEMENT_FAILURE };
}

export function createAnnouncement(announcement) {
  return function goCreateAnnouncement(dispatch) {
    dispatch(announcementInProgress());
    console.log('After dispatch AnnouncementInProgress :)');
    console.log(`your announcement: ${announcement}`);
  };
}

export function closeAnnouncement(sessionId, announcement) {
  return function goCloseAnnouncementPopup(dispatch) {
    console.log(`111 -sessionId: ${sessionId} announcement: ${announcement}`);
    return announcementApi
      .createAnnouncement(sessionId, announcement)
      .then((responseJson) => {
        console.log(responseJson);
        dispatch(createAnnouncementSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(createAnnouncementFailure());
      });
  };
}
