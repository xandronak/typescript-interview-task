export type UserData = {
  id: string;
  username: string;
  email: string;
  password: string;
}
  
export type PasswordData = {
  id: string;
  title: string;
  description: string;
  password: string;
  createdAt: string;
}

export type PasswordDataWithMeta = {
  id: string;
  title: string;
  description: string;
  isPasswordWeak: boolean;
  isPasswordReused: boolean;
  isPasswordOld: boolean;
}