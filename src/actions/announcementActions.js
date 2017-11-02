import * as types from './actionTypes';

function createAnnouncementSuccess() {
  return { type: types.CREATE_ANNOUNCEMENT_SUCCESS };
}

function announcementInProgress() {
  return { type: types.CREATING_ANNOUNCEMENT };
}

export function createAnnouncement(announcement) {
  return function goCreateAnnouncement(dispatch) {
    dispatch(announcementInProgress());
    console.log('After dispatch AnnouncementInProgress :)');
    console.log(`your announcement: ${announcement}`);
  };
}

export function closeAnnouncement(announcement) {
  return function goCloseAnnouncementPopup(dispatch) {
    dispatch(createAnnouncementSuccess());
    console.log(`closing popup: ${announcement}`);
  };
}

export function announcementFailure() {
  return function goFailAnnouncement(dispatch) {
    dispatch(createAnnouncementFailure());
    console.log('announcement failed');
  };
}
