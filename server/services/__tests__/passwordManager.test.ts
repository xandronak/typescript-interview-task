import passwordManager from '../passwordManager';

const testPassword = 'Password123321';

describe('passwordManager', () => {
  test('should encrypt password', () => {
    expect(passwordManager.encryptPassword(testPassword)).not.toEqual(testPassword);
  });

  test('should decrypt password', () => {
    const encryptedPassword = passwordManager.encryptPassword(testPassword);

    expect(passwordManager.decryptPassword(encryptedPassword)).toEqual(testPassword);
  });

  test('should verify plain password with encrypted password', () => {
    const encryptedPassword = passwordManager.encryptPassword(testPassword);

    expect(passwordManager.verifyPassword(testPassword, encryptedPassword)).toBeTruthy();
  });
});
