import superagent from 'superagent';

class BaseAPI {
  constructor() {
    this.api = 'http://localhost';

    this.header = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };

    this.agent = superagent;
  }

  get(api, data) {
    let endpoint = this.api + api;

    this.agent.get(endpoint)
      .query(data)
      .set(this.header);

    return this.agent;
  }

  post(api, data) {
    let endpoint = this.api + api;

    this.agent.post(endpoint)
      .send(JSON.stringify(data));

    return this.agent;
  }

  put(api, data) {
    let endpoint = this.api + api;

    this.agent.put(endpoint)
      .send(JSON.stringify(data));

    return this.agent;
  }

  patch(api, data) {
    let endpoint = this.api + api;

    this.agent.patch(endpoint)
      .send(JSON.stringify(data));

    return this.agent;
  }

  uploadFile(api, file, data) {
    let formData = new FormData(file),
      endpoint = this.api + api;;

    formData.append(field);

    this.agent.post(endpoint)
      .set('Content-Type', 'multipart/form-data');

    if (typeof data === 'object' && data) {
      for (let key in data) {
        this.agent.field(key, data[key]);
      }
    }

    return this.agent;
  }
}

export default BaseAPI;