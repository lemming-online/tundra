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
    console.log(`After dispatch AnnouncementInProgress: ${announcement}`);
  };
}

export function submitAnnouncement(sessionId, announcement) {
  return function goCloseAnnouncementPopup(dispatch) {
    console.log('this is your announcement from action:');
    console.log(announcement);
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

export function cancelAnnouncement() {
  return function goCancelAnnouncement(dispatch) {
    dispatch(createAnnouncementFailure());
  };
}
