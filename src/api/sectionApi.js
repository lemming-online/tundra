class SectionApi {
  static createSection(details, id) {
    console.log(`print id in api call: ${id}`);
    console.log('print details: ');
    console.log(details);
    const request = new Request('https://api.lemming.online/sections', {
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
        console.log('from api: ');
        console.log(response.json());
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
}

export default SectionApi;
