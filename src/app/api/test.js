import superagent from 'superagent';
import BaseAPI from './base.js';

class TestAPI extends BaseAPI {
  testPost(data) {
    let endpoint = '/';

    return this.get(endpoint, data);
  }
}

export const testAPI = new TestAPI();