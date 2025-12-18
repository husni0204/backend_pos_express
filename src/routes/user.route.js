import { Router } from "express";
import {createUser, updateUser} from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/users", createUser);
userRouter.put("/users/:id", updateUser);

export default userRouter;
