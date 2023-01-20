import tokenManager from '../tokenManager';

const testToken = {
  token: '123',
  userId: '1',
};

describe('tokenManager', () => {
  beforeEach(() => {
    tokenManager.addToken(testToken.token, testToken.userId);
  });

  afterEach(() => {
    tokenManager.removeToken(testToken.token);
  });


  test('add token to tokens list', () => {
    expect(tokenManager.findToken(testToken.token)?.userId).toEqual(testToken.userId);
  });

  test('remove token from tokens list', () => {
    expect(tokenManager.findToken(testToken.token)?.userId).toEqual(testToken.userId);

    tokenManager.removeToken(testToken.token);
    expect(tokenManager.findToken(testToken.token)?.userId).toBeUndefined();
  });

  test('check token validity, should be true', () => {
    expect(tokenManager.isTokenValid(testToken.token)).toEqual(true);
  });

  test('check non-existent token validity', () => {
    expect(tokenManager.isTokenValid('fakeToken')).toEqual(false);
  });

  test('check token validity with mock date, should be false', () => {
    // add one hour to current date
    const mockDate = new Date(new Date().getTime() + (1000 * 60 * 60));
    jest.useFakeTimers('modern');
    jest.setSystemTime(mockDate);

    expect(tokenManager.isTokenValid(testToken.token)).toEqual(false);

    jest.useRealTimers();
  });

  test('get token owner id', () => {
    expect(tokenManager.getTokenOwnerId(testToken.token)).toEqual(testToken.userId);
  });

  test('get token owner id with non-existent token', () => {
    expect(tokenManager.getTokenOwnerId('fakeToken')).toEqual(null);
  });

  test('generate token', () => {
    expect(tokenManager.generateToken().length).toBeGreaterThan(0);
  });
});
