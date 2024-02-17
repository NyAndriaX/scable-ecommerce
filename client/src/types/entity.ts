export type UserToken = string;

export type SexeType = 'Md' | 'Mr';

export interface UserInfo{
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