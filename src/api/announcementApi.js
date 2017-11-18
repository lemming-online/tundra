import client from './mischiefClient';

class AnnouncementApi {
  static createAnnouncement(sessionId, announcement) {
    return client.post(`sessions/${sessionId}/announcements`, announcement, true);
  }
  static getAnnouncements(sessionId) {
    return client.get(`sessions/${sessionId}/announcements`, true);
  }
}

export default AnnouncementApi;
