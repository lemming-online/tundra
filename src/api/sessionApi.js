import client from './mischiefClient';

class SessionApi {
  static addQuestionToQueue(sectionId, details) {
    console.log(`sectionId: ${sectionId}`);
    console.log(details);

    return client.post(`sessions/${sectionId}/add`, details, true);
  }

  static deleteQuestionFromQueue(sectionId, userId) {
    console.log(`sectionId: ${sectionId}`);

    return client.delete(`sessions/${sectionId}/remove/${userId}`, true);
  }
}

export default SessionApi;
