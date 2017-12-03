const BASE_URL = 'http://localhost:5050/';

function maybeStringify(json) {
  if (json === undefined) {
    return undefined;
  }
  return JSON.stringify(json);
}

class MischiefClient {
  static makeAuthRequest(method, resource, body) {
    return new Request(BASE_URL + resource, {
      method,
      body: maybeStringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.jwt}`,
      }),
    });
  }
  static makeRequest(method, resource, body) {
    return new Request(BASE_URL + resource, {
      method,
      body: maybeStringify(body),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    });
  }
  static doFetch(request) {
    return fetch(request)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.body);
        }
        return response.json();
      })
      .catch((error) => {
        throw error;
      });
  }
  static get(resource, auth = false) {
    const req = auth
      ? this.makeAuthRequest('GET', resource, undefined)
      : this.makeRequest('GET', resource, undefined);
    return this.doFetch(req);
  }
  static post(resource, body, auth = false) {
    const req = auth
      ? this.makeAuthRequest('POST', resource, body)
      : this.makeRequest('POST', resource, body);
    return this.doFetch(req);
  }
  static delete(resource, auth = false) {
    const req = auth
      ? this.makeAuthRequest('DELETE', resource, undefined)
      : this.makeRequest('DELETE', resource, undefined);
    return this.doFetch(req);
  }
}

export default MischiefClient;
