import { hashSync } from 'bcrypt';
import { UserRegisterInput, User } from '../../typings/user';
import { Context, getContext } from '../context';

const ctx: Context = getContext();

export async function save(request: UserRegisterInput): Promise<User> {
  const { password, ...data } = request;
  return ctx.prisma.user.create({
    data: {
      password: hashSync(password, 10),
      ...data
    }
  });
}

export async function update(
  data: UserRegisterInput,
  userId: string
): Promise<User> {
  return ctx.prisma.user.update({
    where: { id: userId },
    data
  });
}

export async function deleteByUserId(userId: string): Promise<User> {
  return ctx.prisma.user.delete({
    where: { id: userId }
  });
}

export async function findByEmail(email: string): Promise<User | null> {
  return ctx.prisma.user.findUnique({
    where: { email }
  });
}
