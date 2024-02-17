import { Router } from 'express';
import * as authApi from './auth.controller';

const authRoute = Router();

authRoute.post('/register', authApi.register);
authRoute.post('/login',authApi.login);

export default authRoute;
