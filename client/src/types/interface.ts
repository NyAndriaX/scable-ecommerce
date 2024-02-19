export interface User{
  id:string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: 'Mr' | 'Md';
  dateOfBirth: Date | null;
}

export interface LoginInput{
  email:string;
  password:string
}

export interface LoginOutput{
  user:User | null | undefined;
  token:string | null | undefined
}

export interface RegisterInput{
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  sexe:'Mr' | 'Md';
  dateOfBirth:Date | null;
}

export interface RegisterOutput{
  id:string | null | undefined
}