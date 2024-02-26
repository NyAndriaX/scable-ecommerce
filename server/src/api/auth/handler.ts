import { message } from '../errors/message';
import {
  UserType,
  UserRegisterInputType,
  UserLoginInputType
} from '../../typings/user';
import * as userRepository from '../../database/repository/user.repository';
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function handleRegister(
  email: string,
  request: UserRegisterInputType
): Promise<UserType> {
  const user = await userRepository.findByEmail(email);
  if (user && user.id) {
    throw new Error(message.USER_IS_ALREADY_EXIST);
  }
  return userRepository.save(request);
}

export async function handleLogin(
  request: UserLoginInputType
): Promise<{ user: UserType; token: string }> {
  const user = await userRepository.findByEmail(request.email);
  if (!(user && user.id)) {
    throw new Error(message.USER_DOES_NOT_EXIST);
  }
  if (!compareSync(request.password, user.password)) {
    throw new Error(message.INCORRECT_PASSWORD);
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET ?? '');
  return { user, token };
}
