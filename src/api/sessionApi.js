import client from './mischiefClient';

class SessionApi {
  static addQuestionToQueue(groupId, details) {
    console.log(`groupId: ${groupId}`);
    console.log(details);

    return client.post(`sessions/${groupId}/add`, details, true);
  }

  static deleteQuestionFromQueue(groupId, userId) {
    console.log(`groupId: ${groupId}`);

    return client.delete(`sessions/${groupId}/remove/${userId}`, true);
  }
}

export default SessionApi;
