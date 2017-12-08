import client from './mischiefClient';

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

  static addResourceToGroup(body, groupID) {
    return client.post(`groups/${groupID}/resources`, body, true);
  }

  static addMenteesToGroup(body, groupID) {
    return client.post(`groups/${groupID}/people`, body, true);
  }

  static getPeopleInGroup(groupID) {
    return client.get(`groups/${groupID}/people`, true);
  }

  static getResourcesInGroup(groupID) {
    return client.get(`groups/${groupID}/resources`, true);
  }
}

export default GroupApi;
