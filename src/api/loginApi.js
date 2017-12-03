import client from './localhostClient';

class LoginApi {
  static login(credentials) {
    console.log(credentials);
    return client.post('users/login', credentials);
  }
}

export default LoginApi;
