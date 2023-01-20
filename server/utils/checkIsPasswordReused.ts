export const checkIsPasswordReused = (password: string, passwordsList: Array<string>) => {
  const reusedItems = passwordsList.filter((oldPassword) => oldPassword === password);
  return reusedItems.length > 1;
};