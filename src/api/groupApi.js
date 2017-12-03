import client from './localhostClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }
}

export default GroupApi;
