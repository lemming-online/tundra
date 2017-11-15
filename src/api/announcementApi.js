class AnnouncementApi {
  static createAnnouncement(sessionId, announcement) {
    const jwt = localStorage.jwt;

    const request = new Request(`https://api.lemming.online/sessions/${sessionId}/announcements`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      }),
      body: JSON.stringify(announcement),
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
}

export default AnnouncementApi;
