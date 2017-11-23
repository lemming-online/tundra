class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');

    const request = new Request('https://mischief.nutt.men/users', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });

    return fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })
      .then((responseJson) => {
        // TODO: add good comments to explain this
        const postActivation = new Request('https://mischief.nutt.men/activation', {
          method: 'POST',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body: JSON.stringify({ email: responseJson.email }),
        });
        return fetch(postActivation);
      })
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

export default RegistrationApi;
