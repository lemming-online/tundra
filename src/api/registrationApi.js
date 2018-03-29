import client from './mischiefClient';

class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');
    return client
      .post('users', credentials)
      .then(json => client.post('users/activation', { email: json.email }));
  }

  static activate(token) {
    return client.get(`users/activation/${token}`, true);
  }
}

export default RegistrationApi;