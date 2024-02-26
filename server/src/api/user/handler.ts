import {
  PartialUserType,
  UserType,
  ForgotPasswordType,
  ChangeEmailType
} from '../../typings/user';
import { message } from '../errors/message';
import * as userRepository from '../../database/repository/user.repository';
import { compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function handleUpdateUser(
  id: string,
  data: PartialUserType
): Promise<{ user: UserType; token: string }> {
  const user = await userRepository.findById(id);
  if (!(user && user.id)) {
    throw new Error(message.USER_DOES_NOT_EXIST);
  }
  const newDataUser = await userRepository.updateUser(id, data);
  const newDataToken = await jwt.sign(
    { userId: newDataUser.id },
    process.env.JWT_SECRET ?? ''
  );
  return { user: newDataUser, token: newDataToken };
}

export async function handleUpdatePassword(
  id: string,
  data: ForgotPasswordType
): Promise<{ user: UserType; token: string }> {
  const user = await userRepository.findById(id);

  if (!(user && user.id)) {
    throw new Error(message.USER_DOES_NOT_EXIST);
  }
  if (!compareSync(data.currentPassword, user.password)) {
    throw new Error(message.INCORRECT_PASSWORD);
  }
  const newDataUser = await userRepository.updatePassword(id, data);
  const newDataToken = await jwt.sign(
    { userId: newDataUser.id },
    process.env.JWT_SECRET ?? ''
  );

  return { user: newDataUser, token: newDataToken };
}

export async function handleUpdateEmail(
  id: string,
  data: ChangeEmailType
): Promise<{ user: UserType; token: string }> {
  const { newEmail } = data;
  const user = await userRepository.findById(id);
  const isEmailInUse = await userRepository.findByEmail(newEmail);

  if (!(user && user.id)) {
    throw new Error(message.USER_DOES_NOT_EXIST);
  }
  if (isEmailInUse) {
    throw new Error(message.EMAIL_IS_ALREADY_EXIST);
  }
  if (!compareSync(data.currentPassword, user.password)) {
    throw new Error(message.INCORRECT_PASSWORD);
  }

  const newDataUser = await userRepository.updateEmail(id, newEmail);
  const newDataToken = await jwt.sign(
    { userId: newDataUser.id },
    process.env.JWT_SECRET ?? ''
  );

  return { user: newDataUser, token: newDataToken };
}
