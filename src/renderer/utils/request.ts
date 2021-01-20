/*
 * @Author: Mr.pz
 * @Date: 2021-01-20 00:06:37
 * @Last Modified by: Mr.pz
 * @Last Modified time: 2021-01-20 00:07:08
 * TODO: download
 * 如果没有传 needCode，就直接返回 data
 */

const baseURL = 'http://server.babaloveyou.com';

function abortableFetch() {
  const controller = new AbortController();
  const signal = controller.signal;

  return {
    abort: () => {
      controller.abort();
    },
    request: (params) => {
      const { url, data, method = 'POST', needCode, options = {} } = params;
      let requestURL;
      if (typeof params === 'string') {
        requestURL = baseURL + params;
      } else {
        requestURL = baseURL + url;
      }
      return fetch(requestURL, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        headers: {},
        method: method, // *GET, POST, PUT, DELETE, etc.
        signal,
        ...options,
      })
        .then((response) => response.json())
        .then((res) => {
          const { code, data = 'success' } = res;
          if (code === 200) {
            if (needCode) {
              return res;
            }
            return data;
          }
          throw new Error('request faild');
        })
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
