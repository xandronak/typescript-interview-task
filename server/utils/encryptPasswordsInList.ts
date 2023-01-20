import passwordManager from '../services/passwordManager';

export const encryptPasswordsInList = <T>(users): Array<T> => (
  users.map((data) => ({
    ...data,
    password: passwordManager.encryptPassword(data.password),
  }))
);
