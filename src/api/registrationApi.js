class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');

    const request = new Request('https://api.lemming.online/users', {
      method: 'POST',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      // args are one by one instead of the whole credentials object,
      // because we need to construct a display_name
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        display_name: `${credentials.first_name} ${credentials.last_name}`,
      }),
    });

    fetch(request)
      .then(response => response.json())
      .then(responseJson => responseJson)
      .catch((error) => {
        console.log(error);
      });
  }
}

export default RegistrationApi;
