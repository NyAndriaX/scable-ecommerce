import { Router } from "express";
import * as userApi from "./user.controller"

const userRoute = Router();

userRoute.put('/:id',userApi.updateUser);
userRoute.put('/password/:id',userApi.updatePassword);
userRoute.put('/email/:id',userApi.updateEmail);

export default userRoute;