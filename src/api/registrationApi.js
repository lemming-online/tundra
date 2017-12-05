import client from './localhostClient';

class RegistrationApi {
  static register(credentials) {
    console.log('registerUser');
    return client
      .post('users', credentials)
      .then(json => client.post('activation', { email: json.email }));
  }
}

export default RegistrationApi;
