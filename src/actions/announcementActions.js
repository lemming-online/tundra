import * as types from './actionTypes';

function createAnnouncementSuccess() {
  return { type: types.CREATE_ANNOUNCEMENT_SUCCESS };
}

function announcementInProgress() {
  return { type: types.CREATING_ANNOUNCEMENT };
}

function createAnnouncementFailure() {
  return { type: types.CREATE_ANNOUNCEMENT_FAILURE };
}

export default function createAnnouncement(announcement) {
  return function goCreateAnnouncement(dispatch) {
    dispatch(announcementInProgress());
    console.log('After dispatch AnnouncementInProgress :)');
    console.log(`your announcement: ${announcement}`);
    // dispatch(createAnnouncementSuccess());
    // console.log('After dispatch createAnnouncementSuccess');
    // console.log(`your announcement: ${announcement}`);
    // send dispatch signal
  };
}
