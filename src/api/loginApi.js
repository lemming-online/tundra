import client from './mischiefClient';

class LoginApi {
  static login(credentials) {
    return client.post('users/login', credentials);
  }

  static getMyDetails() {
    return client.get('users/', true);
  }

  static postMyImage(image) {
    return client.postFile('users/image', image);
  }

  static resetPassword(credentials) {
    return client.post('users/reset', credentials);
  }

  static updatePassword(token, credentials) {
    return client.post(`users/reset/${token}`, credentials);
  }

  static updateUser(body) {
    return client.put('users', body, true);
  }
}

export default LoginApi;
