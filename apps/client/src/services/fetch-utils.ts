export type FetchOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: string | FormData;
};

class FetchUtil {
  /**
   * @param {string} url
   * @param {object} [fetchOptions={method:'GET'}] basis https://fetch.spec.whatwg.org/ | https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
   * @returns A promise which resolves to response-data or rejects with a corresponding error object, which contains requested url as well
   */
  static call(url: string, options: FetchOptions) {
    return fetch(url, options).then((response) => {
      if (!response.ok) {
        return Promise.reject(
          new Error(
            `Call failed for ${url} : ${response.status} ${response.statusText}`
          )
        );
      }

      return response.json();
    });
  }
}

export default FetchUtil;
