import {checkIsPasswordReused} from '../checkIsPasswordReused';

const items = [
  {
    'id': '000',
    'title': 'discord',
    'description': 'rumors',
    'password': 'discordPassword123.',
    'createdAt': null
  },
  {
    'id': '001',
    'title': 'airdroid',
    'description': 'replace android',
    'password': 'pass1',
    'createdAt': null
  },
  {
    'id': '010',
    'title': 'Nintendo',
    'description': 'Lets play',
    'password': 'pass1',
    'createdAt': null
  }
];

const passwordsList = items.map(({password}) => password);

test('should return true if there is more than one item with same password', () => {
  expect(checkIsPasswordReused(items[0].password, passwordsList)).toBe(false);
  expect(checkIsPasswordReused(items[2].password, passwordsList)).toBe(true);
});