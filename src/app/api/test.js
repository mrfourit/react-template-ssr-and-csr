import BaseAPI from './base.js';

class TestAPI extends BaseAPI {
  testPost(data) {
    this.post();
  }
}

export default TestAPI;