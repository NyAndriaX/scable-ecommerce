import { Request, Response } from 'express';
import { handleError } from '../utils/request';
import { handleRegister, handleLogin } from './handler';
import validation from './validation';

export const register = async (req: Request, res: Response) => {
  try {
    const request = validation.validateRegister(req);
    const { email } = request;
    const user = await handleRegister(email, request);
    res.send({ id: user.id });
  } catch (e) {
    handleError(res, e);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const request = validation.validateLoginRequest(req);
    const response = await handleLogin(request);
    res.send(response);
  } catch (e) {
    handleError(res, e);
  }
};
