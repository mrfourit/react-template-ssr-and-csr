import superagent from 'superagent';
import BaseAPI from './base.js';

class TestAPI extends BaseAPI {
  testPost(data) {
    let endpoint = '/te';

    return this.post(endpoint, data);
  }
}

export const testAPI = new TestAPI();