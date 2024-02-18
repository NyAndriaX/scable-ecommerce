import { SexeType } from "./enum";

export interface User{
  id:string;
  created_at: Date;
  updated_at: Date;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  sexe: SexeType;
  dateOfBirth: Date | null;
}

export interface LoginInput{
  email:string;
  password:string
}