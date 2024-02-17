import {_get,_post} from "../api/apiClient"
import { UserInfo,UserToken,SexeType } from "@/types/entity"


export interface LoginReq{
  email:string;
  password:string
}

export interface RegisterReq extends LoginReq{
  firstName:string;
  lastName:string;
  sexe:SexeType;
  dateOfBirth?:Date;
}

export type LoginRes = {
  token:UserToken;
  user:UserInfo
}

export enum UserApi {
  Login = '/auth/login',
  Register = '/auth/register'
}

const login = (data:LoginReq) => _post<LoginRes>(UserApi.Login, data);
const register = (data:RegisterReq) => _post<{id:string}>(UserApi.Register, data)

export {
  login,
  register
}