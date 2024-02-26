import { Router } from 'express';
import authRoute from './auth/auth.route';
import userRoute from './user/user.route';

const routes = Router();

routes.use('/auth', authRoute);
routes.use('/user',userRoute);

export default routes;
