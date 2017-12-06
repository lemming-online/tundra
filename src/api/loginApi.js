import client from './mischiefClient';

class LoginApi {
  static login(credentials) {
    return client.post('users/login', credentials);
  }

  static getMyDetails() {
    return client.get('users/', true);
  }

  static postMyImage(image) {
    return client.post('users/image', image, true);
  }
}

export default LoginApi;
