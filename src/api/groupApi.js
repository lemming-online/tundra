import client from './mischiefClient';

class GroupApi {
  static createGroup(details) {
    return client.post('groups', details, true);
  }
}

export default GroupApi;
