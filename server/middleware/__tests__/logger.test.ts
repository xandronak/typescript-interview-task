import logger from '../logger';

const nextMock = jest.fn();

const req = {
  method: 'GET',
  url: 'url',
};

describe('logger', () => {
  test('check if request data logged', () => {
    const consoleLogMock = jest.spyOn(global.console, 'log').mockImplementation();
    
    logger(req, null, nextMock);
  
    expect(consoleLogMock).toHaveBeenCalledWith(req.method, req.url);
    expect(nextMock).toHaveBeenCalled();
  });
});
