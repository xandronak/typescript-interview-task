import authentication from '../authentication';
import tokenManager from '../../services/tokenManager';

const sendMock = jest.fn();
const statusMock = jest.fn(() => ({send: sendMock}));
const nextMock = jest.fn();

const req = {
  headers: {
    authorization: 'Bearer 123321'
  }
};

const res = {status: statusMock};

describe('authentication', () => {
  test('check with non-existing token', () => {
    authentication(req, res, nextMock);
    expect(sendMock).toHaveBeenCalled();
  });

  test('check with valid token', () => {
    const token = tokenManager.generateToken();
    tokenManager.addToken(token, '1');

    const req = {
      headers: {
        authorization: `Bearer ${token}`
      }
    };
  
    authentication(req, res, nextMock);
    expect(nextMock).toHaveBeenCalled();
  });
});
