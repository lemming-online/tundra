class LoginApi {
  static login(credentials) {
    const request = new Request('https://api.lemming.online/authentication', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default LoginApi;
