import {PasswordData} from '../../types';
import {encryptPasswordsInList} from '../encryptPasswordsInList';

const items = [
  {
    'id': '000',
    'title': 'discord',
    'description': 'rumors',
    'password': 'discordPassword123.',
    'createdAt': new Date().toISOString(),
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
    'createdAt': new Date().toISOString(),
  }
];

test('should return the same list with encrypted passwords', () => {
  expect(encryptPasswordsInList<PasswordData>(items).map(({password}) => password)).not.toEqual(
    items.map(({password}) => password)
  );
});