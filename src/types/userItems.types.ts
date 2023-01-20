export type ItemData = {
  id: string;
  title: string,
  description: string,
  isPasswordOld: boolean,
  isPasswordReused: boolean,
  isPasswordWeak: boolean,
}

export type UpdateItemData = {
  id: string;
  password: string;
}