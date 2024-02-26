export type UserType = {
  id: string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: 'Md' | 'Mr';
  dateOfBirth: Date | null;
};

export type UserRegisterInputType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: 'Md' | 'Mr';
  dateOfBirth: Date | null;
};

export type UserLoginInputType = {
  email: string;
  password: string;
};

export type ForgotPasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type ChangeEmailType = {
  newEmail: string;
  currentPassword: string;
};

export type PartialUserType = Partial<UserType>;
