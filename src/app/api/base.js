import superagent from 'superagent';

class BaseAPI {
  constructor() {
    this.api = 'http://localhost:3000';

    this.header = {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    };
  }

  get(api, data) {
    let endpoint = this.api + api,
      agent = null;

    agent = superagent.get(endpoint)
      .set(this.header);

    if (data) {
      agent.query(data)
    }

    return agent;
  }

  post(api, data) {
    let endpoint = this.api + api,
      agent = null;

    agent = superagent.post(endpoint)
      .set(this.header)
      .send(JSON.stringify(data));

    return agent;
  }

  put(api, data) {
    let endpoint = this.api + api,
      agent = null;

    agent = superagent.put(endpoint)
      .send(JSON.stringify(data))
      .set(this.header);

    return agent;
  }

  patch(api, data) {
    let endpoint = this.api + api,
      agent = null;

    agent = superagent.patch(endpoint)
      .set(this.header)
      .send(JSON.stringify(data));

    return agent;
  }

  uploadFile(api, file, data) {
    let formData = new FormData(file),
      endpoint = this.api + api,
      agent = null;

    formData.append(field);

    agent = superagent.post(endpoint)
      .set(this.header)
      .set('Content-Type', 'multipart/form-data');

    if (typeof data === 'object' && data) {
      for (let key in data) {
        agent.field(key, data[key]);
      }
    }

    return agent;
  }
}

export default BaseAPI;