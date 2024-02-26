import { PartialUserType,UserType,ForgotPasswordType,ChangeEmailType } from "../../typings/user";
import { message } from "../errors/message";
import * as userRepository from "../../database/repository/user.repository"
import { compareSync } from "bcrypt";

export async function handleUpdateUser(id:string,data:PartialUserType):Promise<UserType>{
  const user = await userRepository.findById(id);
  if(!(user && user.id)){
    throw new Error(message.USER_DOES_NOT_EXIST)
  }
  return userRepository.updateUser(id,data);
}

export async function handleUpdatePassword(id:string,data:ForgotPasswordType):Promise<UserType>{
  const user = await userRepository.findById(id);

  if(!(user && user.id)){
    throw new Error(message.USER_DOES_NOT_EXIST)
  }
  if(!compareSync(data.currentPassword,user.password)){
    throw new Error(message.INCORRECT_PASSWORD);
  }

  return userRepository.updatePassword(id,data);

}

export async function handleUpdateEmail(id:string,data:ChangeEmailType):Promise<UserType>{
  const {newEmail}= data;
  const user = await userRepository.findById(id);
  const isEmailInUse = await userRepository.findByEmail(newEmail);

  if(!(user && user.id)){
    throw new Error(message.USER_DOES_NOT_EXIST)
  }
  if(isEmailInUse){
    throw new Error(message.EMAIL_IS_ALREADY_EXIST)
  }
  if(!compareSync(data.currentPassword,user.password)){
    throw new Error(message.INCORRECT_PASSWORD);
  }

  return userRepository.updateEmail(id,newEmail);

}