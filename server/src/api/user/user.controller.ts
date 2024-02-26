import { Request, Response } from 'express';
import { handleError } from '../utils/request';
import {
  handleUpdateUser,
  handleUpdatePassword,
  handleUpdateEmail
} from './handler';
import validation from './validation';

export const updateUser = async (req: Request, res: Response) => {
  try {
    const request = validation.validationUpdateUserRequest(req);
    const { id, ...data } = request;
    const user = await handleUpdateUser(id, data);
    res.send(user);
  } catch (e: any) {
    handleError(res, e);
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const request = validation.validationUpdatePasswordRequest(req);
    const { id, ...data } = request;
    const user = await handleUpdatePassword(id, data);
    res.send(user);
  } catch (e) {
    handleError(res, e);
  }
};

export const updateEmail = async (req: Request, res: Response) => {
  try {
    const request = validation.validationUpdateEmailRequest(req);
    const { id, ...data } = request;
    const user = await handleUpdateEmail(id, data);
    res.send(user);
  } catch (e: any) {
    handleError(res, e);
  }
};
