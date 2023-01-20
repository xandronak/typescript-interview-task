import {checkIsPasswordOld} from '../checkIsPasswordOld';

const items = [
  {
    'id': '000',
    'title': 'discord',
    'description': 'rumors',
    'password': 'discordPassword123.',
    'createdAt': new Date(new Date().setMonth(new Date().getMonth() - 3)).toISOString(),
  },
  {
    'id': '001',
    'title': 'airdroid',
    'description': 'replace android',
    'password': 'pass1',
    'createdAt': new Date().toISOString(),
  },
  {
    'id': '010',
    'title': 'Nintendo',
    'description': 'Lets play',
    'password': 'pass1',
    'createdAt': new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
  }
];

test('should return true if password older than 1 month (default value)', () => {
  expect(items.map((item) => checkIsPasswordOld(item.createdAt))).toEqual(
    [true, false, false]
  );
});

test('should return true if password older than 1 year', () => {
  const ONE_YEAR_IN_MS = 1000 * 60 * 60 * 24 * 30 * 12;
  expect(items.map((item) => checkIsPasswordOld(item.createdAt, ONE_YEAR_IN_MS))).toEqual(
    [false, false, false]
  );
});

test('should return true if password older than 1 minute', () => {
  const ONE_MINUTE_IN_MS = 1000 * 60;
  expect(items.map((item) => checkIsPasswordOld(item.createdAt, ONE_MINUTE_IN_MS))).toEqual(
    [true, false, true]
  );
});