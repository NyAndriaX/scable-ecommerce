import { UserInput,User } from "../../typings/user";
import { Context,getContext } from "../context";

const ctx:Context = getContext();

export async function save(data:UserInput):Promise<User>{
  return ctx.prisma.user.create({
    data,
  })
}

export async function update(data:UserInput,userId:string):Promise<User>{
  return ctx.prisma.user.update({
    where:{ id : userId},
    data,
  })
}

export async function deleteByUserId(userId:string):Promise<User>{
  return ctx.prisma.user.delete({
    where:{ id: userId}
  })
}

export async function findByEmail(email:string):Promise<User | null>{
  return ctx.prisma.user.findUnique({
    where: { email }
  })
}