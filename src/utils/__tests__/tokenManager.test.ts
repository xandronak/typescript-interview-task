import * as tokenManager from '../tokenManager';

const testToken = '8ncy2qmhwenu89';

describe('tokenManager', () => {
  test('get token', async () => {
    tokenManager.setToken(testToken);

    expect(tokenManager.getToken()).toEqual(testToken);
  });

  test('remove token', async () => {
    tokenManager.setToken(testToken);
    expect(tokenManager.getToken()).toEqual(testToken);

    tokenManager.removeToken();
    expect(tokenManager.getToken()).toEqual('');
  });
});
