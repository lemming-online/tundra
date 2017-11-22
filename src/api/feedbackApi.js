import client from './mischiefClient';

class FeedbackApi {
  static sendFeedback(body, sectionID, mentorID) {
    console.log(`content - API: ${body}`);
    console.log(`sectionID - API: ${sectionID} mentorID: ${mentorID}`);

    return client.post(`sections/${sectionID}/mentors/${mentorID}/feedback`, { body }, true);
  }
}

export default FeedbackApi;
