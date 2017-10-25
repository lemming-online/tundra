class LoginApi {
  static login(credentials) {
    const request = new Request('https://api.lemming.online/authentication', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(credentials),
    });

    return fetch(request).then(response => response.json());
    //  TODO: investigate this. does the error get thrown up?
    //  how is it handled by the calling function?
    // .catch((error) => {
    //   throw error;
    // });
  }
}

export default LoginApi;
