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

  static updatePassword(token) {
    return client.post(`users/reset/${token}`);
  }
}

export default LoginApi;
