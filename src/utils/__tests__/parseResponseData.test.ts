import parseResponseData from '../parseResponseData';

const simpleText = 'It is a simple text';
const mockObject = {username: 'User'};

describe('parseResponseData', () => {
  test('parse JSON data', async () => {
    const {data, isJSON} = await parseResponseData({
      text: jest.fn(() => Promise.resolve(JSON.stringify(mockObject))),
      json: jest.fn(() => Promise.resolve(mockObject)),
    });

    expect(data).toEqual(mockObject);
    expect(isJSON).toEqual(true);
  });

  test('parse plain text', async () => {
    const {data, isJSON} = await parseResponseData({
      text: jest.fn(() => Promise.resolve(simpleText)),
      json: jest.fn(() => Promise.resolve(JSON.parse(simpleText))),
    });

    expect(data).toEqual(simpleText);
    expect(isJSON).toEqual(false);
  });
});
