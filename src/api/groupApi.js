import client from './localhostClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }

  static addMentorToGroup(details) {
    return client.post('people', details, true);
  }

  static addMenteeToGroup(details) {
    return client.post('people', details, true);
  }
}

export default GroupApi;
