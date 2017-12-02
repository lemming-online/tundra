import client from './mischiefClient';

class SectionApi {
  static createSection(details) {
    return client.post('sections', details, true);
  }
}

export default SectionApi;
