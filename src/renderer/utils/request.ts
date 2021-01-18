const baseURL = 'http://server.babaloveyou.com';

function request(url, data,method = 'POST') {
  // Default options are marked with *
  url = baseURL + url;
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    headers: {
    },
    method: method, // *GET, POST, PUT, DELETE, etc.
  })
  .then(response => response.json()); // parses response to JSON
}

export default request;
