import { hashSync } from 'bcrypt';
import { UserRegisterInputType ,UserType,PartialUserType,ForgotPasswordType,ChangeEmailType} from '../../typings/user';
import { Context, getContext } from '../context';

const ctx: Context = getContext();

export async function save(request: UserRegisterInputType): Promise<UserType> {
  const { password, ...data } = request;
  return ctx.prisma.user.create({
    data: {
      password: hashSync(password, 10),
      ...data
    }
  });
}

export async function updateUser(userId:string,request:PartialUserType):Promise<UserType>{
  return ctx.prisma.user.update({
    where:{id:userId},
    data:request
  })
}

export async function updatePassword(userId:string,request:ForgotPasswordType):Promise<UserType>{
  const {newPassword} =request;
  return ctx.prisma.user.update({
    where:{id:userId},
    data:{
      password:hashSync(newPassword,10)
    }
  })
}

export async function updateEmail(userId:string,newEmail:string){
  return ctx.prisma.user.update({
    where:{id:userId},
    data:{
      email:newEmail
    }
  })
}


export async function deleteByUserId(userId: string): Promise<UserType> {
  return ctx.prisma.user.delete({
    where: { id: userId }
  });
}

export async function findByEmail(email: string): Promise<UserType | null> {
  return ctx.prisma.user.findUnique({
    where: { email }
  });
}

export async function findById(id:string):Promise<UserType | null> {
  return ctx.prisma.user.findUnique({
    where: {id}
  })
}