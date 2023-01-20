import {API} from '~/constants/api';
import {getToken} from '~/utils/tokenManager';
import getUrl, {QueryParams} from '~/utils/getUrl';
import parseResponseData from '~/utils/parseResponseData';

type RequestOptions = {
  method?: 'GET' | 'POST';
  headers?: {[key: string]: string};
  body?: {[key: string]: string | number};
  params?: QueryParams;
}

class HTTPClient {
  async fetch(url: API, options?: RequestOptions) {
    const headers = {
      ...options?.headers,
      Authorization: `Bearer ${getToken()}`,
    };

    const fetchOptions = {
      method: options?.method || 'GET',
      headers,
      body: JSON.stringify(options?.body),
    };

    try {
      const response = await fetch(getUrl(url, options?.params || {}), fetchOptions);
      const {data} = await parseResponseData(response);

      if (response.status >= 200 && response.status < 300) {
        return {
          response,
          data,
        };
      }

      throw Error(data?.message || data);
    } catch(error) {
      this.handleError(error);
      throw Error(error?.message || 'Unexpected error');
    }
  }

  private handleError(error) {
    // this is the place to log errors to backend
    console.error(error);
  }
}

export default new HTTPClient();
