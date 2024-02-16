export type SexeType = 'Md' | 'Mr'

export type User = {
  id:string;
  created_at:Date;
  updated_at:Date;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  sexe:SexeType;
  dateOfBirth:Date | null;
}

export type UserInput = {
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  sexe:SexeType;
  dateOfBirth:Date;
}