import client from './localhostClient';

class LoginApi {
  static login(credentials) {
    return client.post('users/login', credentials);
  }

  static getMyDetails() {
    return client.get('users/', true);
  }

  static resetPassword(credentials) {
    return client.post('users/reset', credentials);
  }
}

export default LoginApi;
