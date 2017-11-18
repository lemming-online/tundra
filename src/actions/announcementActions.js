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

function fetchAnnouncements() {
  return { type: types.GET_ANNOUNCEMENTS_FETCH };
}

function getAnnouncementsSuccess(announcements) {
  return { type: types.GET_ANNOUNCEMENTS_SUCCESS, announcements };
}

function getAnnouncementsFailure() {
  return { type: types.GET_ANNOUNCEMENTS_FAILURE };
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
    console.log(announcement, sessionId);
    return announcementApi
      .createAnnouncement(sessionId, announcement)
      .then((json) => {
        console.log(json);
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

export function getAnnouncements(sessionId) {
  return function goGetAnnouncements(dispatch) {
    console.log('Fetching announcements');
    dispatch(fetchAnnouncements());
    return announcementApi
      .getAnnouncements(sessionId)
      .then(({ announcements }) => {
        // console.log(json);
        dispatch(getAnnouncementsSuccess(announcements));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getAnnouncementsFailure());
      });
  };
}
