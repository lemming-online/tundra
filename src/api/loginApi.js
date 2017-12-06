import client from './localhostClient';

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
}

export default LoginApi;
