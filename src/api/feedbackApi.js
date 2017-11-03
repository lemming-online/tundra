class FeedbackApi {
  static sendFeedback(message, sectionID, mentorID) {
    console.log(message);
    console.log(`sectionID: ${sectionID} mentorID: ${mentorID}`);

    const request = new Request(
      `https://api.lemming.online/sections/${sectionID}/mentors/${mentorID}/feedback`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(message),
      },
    );
  }
}

export default FeedbackApi;
