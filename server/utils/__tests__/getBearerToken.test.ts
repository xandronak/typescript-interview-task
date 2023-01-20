import faker from 'faker';

import {getBearerToken} from '../getBearerToken';

const token = faker.random.alphaNumeric(24);
const request = {
  headers: {
    authorization: `Bearer ${token}`,
  }
};

test('should return generated token', () => {
  expect(getBearerToken(request)).toEqual(token);
});

test('should return null', () => {
  expect(getBearerToken({})).toBeNull();
});