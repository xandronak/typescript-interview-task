import {API} from '~/constants/api';
import httpClient from '~/httpClient';
import {setToken} from '~/utils/tokenManager';

const login = async (username: string, password: string) => {
  try {
    const {data} = await httpClient.fetch(API.Login, {
      method: 'POST',
      body: {
        username,
        password,
      },
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const {token} = data;
    setToken(token);
  } catch(error) {
    throw Error(error.message);
  }
};

export default login;
