import httpClient from '~/httpClient';
import {API} from '~/constants/api';
import {removeToken} from '~/utils/tokenManager';

const logout = async () => {
  await httpClient.fetch(API.Logout, {
    method: 'POST'
  });
  removeToken();
};

export default logout;