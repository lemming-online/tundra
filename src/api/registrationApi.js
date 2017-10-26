class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');

    const request = new Request('https://api.lemming.online/users', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });

    fetch(request)
      .then(response => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        return responseJson;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default RegistrationApi;
