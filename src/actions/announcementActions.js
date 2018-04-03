import * as types from './actionTypes';
import announcementApi from '../api/announcementApi';

function createAnnouncementSuccess(announcement) {
  return { type: types.CREATE_ANNOUNCEMENT_SUCCESS, announcement };
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
  };
}

export function submitAnnouncement(sessionId, announcement) {
  return function goCloseAnnouncementPopup(dispatch) {
    return announcementApi
      .createAnnouncement(sessionId, announcement)
      .then((json) => {
        dispatch(createAnnouncementSuccess(announcement.announcement));
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
    dispatch(fetchAnnouncements());
    return announcementApi
      .getAnnouncements(sessionId)
      .then(({ announcements }) => {
        dispatch(getAnnouncementsSuccess(announcements));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getAnnouncementsFailure());
      });
  };
}
