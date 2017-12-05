import client from './localhostClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }

  static addMentorToGroup(details) {
    return client.post('people', details, true);
  }

  static addMenteeToGroup(body, groupID) {
    return client.post(`groups/${groupID}/people`, body, true);
  }
}

export default GroupApi;
