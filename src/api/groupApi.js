import client from './localhostClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }

  static fetchGroup(id) {
    return client.get(`groups/${id}`, true);
  }
}

export default GroupApi;
