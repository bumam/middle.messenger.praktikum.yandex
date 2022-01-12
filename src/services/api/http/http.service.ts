import { METHOD, Options, OptionsWithoutMethod } from "./types";
import { BASE_URL } from "../../../constants/api";

class HTTP {
  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.GET });
  }

  post(
    url: string,
    options: Options = { method: METHOD.POST }
  ): Promise<XMLHttpRequest> {
    return this.request(url, options);
  }

  patch(
    url: string,
    options: Options = { method: METHOD.PATCH }
  ): Promise<XMLHttpRequest> {
    return this.request(url, options);
  }

  put(
    url: string,
    options: Options = { method: METHOD.PUT }
  ): Promise<XMLHttpRequest> {
    return this.request(url, options);
  }

  delete(
    url: string,
    options: Options = { method: METHOD.DELETE }
  ): Promise<XMLHttpRequest> {
    return this.request(url, options);
  }

  request(
    url: string,
    options: Options = { method: METHOD.GET }
  ): Promise<XMLHttpRequest> {
    const { method, data } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(method as string, `${BASE_URL}${url}`);

      xhr.withCredentials = true;

      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");

      xhr.onload = function () {
        const { status, response } = xhr;
        try {
          if (status === 200 || status === 201) {
            return resolve(response);
          }
        } catch (e) {
          return reject({ status, response });
        }
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHOD.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }
}

export default new HTTP();
