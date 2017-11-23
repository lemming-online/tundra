import client from './mischiefClient';

class FeedbackApi {
  static sendFeedback(message, sectionID, mentorID) {
    return client
      .post(`sections/${sectionID}/mentors/${mentorID}/feedback`, message, true)
      .catch((error) => {
        throw error;
      });
  }
}

export default FeedbackApi;
