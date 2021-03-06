import client from './mischiefClient';

class SessionApi {
  static createSession(body) {
    return client.post('sessions', body, true);
  }

  static archiveSession(groupId) {
    return client.delete(`sessions/${groupId}`, true);
  }

  static getLiveSession(groupId) {
    return client.get(`sessions/${groupId}`, true);
  }

  static getArchivedSessions(groupId) {
    return client.get(`sessions/${groupId}/archived`, true);
  }
  static addQuestionToQueue(groupId, details) {
    return client.post(`sessions/${groupId}/add`, details, true);
  }

  static deleteQuestionFromQueue(groupId, userId) {
    return client.delete(`sessions/${groupId}/remove/${userId}`, true);
  }
}

export default SessionApi;
