const baseURL = 'http://server.babaloveyou.com';

function abortableFetch() {
  const controller = new AbortController();
  const signal = controller.signal;

  return {
    abort: () => {
      controller.abort();
    },
    request: (url, data, method = 'POST') => {
      url = baseURL + url;
      return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {},
        method: method, // *GET, POST, PUT, DELETE, etc.
        signal,
      })
        .then((response) => response.json())
        .catch((err) => {
          console.warn(err);
        }); // parses response to JSON
    },
  };
}

const abortable = abortableFetch();

const request = abortable.request;

export default request;

export const abort = abortable.abort;
