class FeedbackApi {
  static sendFeedback(message, sectionID, mentorID, jwt) {
    console.log(`content - API: ${message}`);
    console.log(`sectionID - API: ${sectionID} mentorID: ${mentorID}`);
    console.log(`JWT: ${jwt}`);

    const request = new Request(
      `https://api.lemming.online/sections/${sectionID}/mentors/${mentorID}/feedback`,
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        }),
        body: JSON.stringify(message),
      },
    );

    return fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default FeedbackApi;
