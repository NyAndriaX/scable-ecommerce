import { message } from "../errors/message";
import { UserInput,User } from "../../typings/user";
import * as userRepository from "../../database/repository/user.repository"

export async function handleRegister(email:string,data:UserInput):Promise<User>{
  const user = await userRepository.findByEmail(email)
  if(user && user.id){
    throw new Error(message.USER_IS_ALREADY_EXIST)
  }
  return userRepository.save(data)
}

// export async function handleLogin() : user