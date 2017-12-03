import client from './mischiefClient';

class FeedbackApi {
  static sendFeedback(body, groupID, mentorID) {
    console.log(`content - API: ${body}`);
    console.log(`groupID - API: ${groupID} mentorID: ${mentorID}`);

    return client.post(`groups/${groupID}/mentors/${mentorID}/feedback`, { body }, true);
  }
}

export default FeedbackApi;
