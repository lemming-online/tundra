import client from './mischiefClient';

class LoginApi {
  static login(credentials) {
    return client.post('authentication', credentials);
  }
}

export default LoginApi;
