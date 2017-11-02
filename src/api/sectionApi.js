class SectionApi {
  static createSection(details, id) {
    const request = new Request('http://api.lemming.online/sections', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${id}`,
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
}

export default SectionApi;
