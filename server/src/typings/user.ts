export type SexeType = 'Md' | 'Mr';

export type User = {
  id: string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: SexeType;
  dateOfBirth: Date | null;
};

export type UserRegisterInput = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: SexeType;
  dateOfBirth: Date;
};

export type UserLoginInput = {
  email: string;
  password: string;
};
