const STORAGE_TOKEN_KEY = 'token';

export const getToken = () => (
  localStorage.getItem(STORAGE_TOKEN_KEY) || ''
);

export const setToken = (userToken: string) => {
  localStorage.setItem(STORAGE_TOKEN_KEY, userToken);
};

export const removeToken = () => {
  localStorage.removeItem(STORAGE_TOKEN_KEY);
};
