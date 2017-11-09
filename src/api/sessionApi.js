class SessionApi {
  static addQuestionToQueue(jwt, sectionId, details) {
    console.log(`jwt: ${jwt}`);
    console.log(`sectionId: ${sectionId}`);
    console.log(details);

    const request = new Request(`https://api.lemming.online/sessions/${sectionId}/add`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }),
      body: JSON.stringify(details),
    });

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

  static deleteQuestionFromQueue(sectionId, userId) {
    const jwt = localStorage.jwt;
    console.log(`jwt: ${jwt}`);
    console.log(`sectionId: ${sectionId}`);

    const request = new Request(
      `https://api.lemming.online/sessions/${sectionId}/remove/${userId}`,
      {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        }),
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

export default SessionApi;
