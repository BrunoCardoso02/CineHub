import { Router } from "express";
import signUp from "../../controllers/user/signUp";
import signIn from "../../controllers/user/signIn";
import listUser from "../../controllers/user/listUser";
import listUserId from "../../controllers/user/listUserId";
import deleteUser from "../../controllers/user/deleteUser";

const userRouter: Router = Router();

userRouter.post('/createUser', signUp);
userRouter.get('/listUsers', listUser);
userRouter.post('/signIn', signIn);
userRouter.get('/listUser/:id', listUserId);
userRouter.delete('/deleteUser/:id', deleteUser);

export default userRouter;

