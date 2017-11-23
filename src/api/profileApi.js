import client from './mischiefClient';

class ProfileApi {
  static login(credentials) {
    return client.post('authentication', credentials);
  }
}

export default ProfileApi;
