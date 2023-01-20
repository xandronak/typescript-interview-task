import timeout from '../timeout';

const nextMock = jest.fn();

describe('timeout', () => {
  test('check if timeout is working', () => {
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');

    timeout(null, null, nextMock);
  
    expect(setTimeout).toHaveBeenLastCalledWith(nextMock, 500);
  });
});
