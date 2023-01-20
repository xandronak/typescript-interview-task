import qs from 'query-string';

import {API} from '~/constants/api';

export type QueryParams = Record<string, string | number>;

const getUrl = (endpoint: API, params?: QueryParams) => {
  const query = qs.stringify(params);
  return `${process.env.API_URL}/${endpoint}${query ? `?${query}` : ''}`;
};

export default getUrl;
