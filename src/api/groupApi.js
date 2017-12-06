import client from './localhostClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }

  static fetchGroup(id) {
    return client.get(`groups/${id}`, true);
  }

  static addMentorToGroup(body, groupID) {
    return client.post(`groups/${groupID}/people`, body, true);
  }

  static addMenteesToGroup(body, groupID) {
    return client.post(`groups/${groupID}/people`, body, true);
  }
}

export default GroupApi;
