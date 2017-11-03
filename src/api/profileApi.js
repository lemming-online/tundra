class profileApi {
  static login(credentials) {
    const request = new Request('https://api.lemming.online/authentication', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });

    //  TODO: investigate this. does the error get thrown up?
    //  how is it handled by the calling function?
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

export default profileApi;
