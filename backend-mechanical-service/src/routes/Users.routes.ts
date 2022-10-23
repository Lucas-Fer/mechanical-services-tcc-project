import { Router } from "express";
import UserService from "../services/Users.services";
import UsersModel from "../database/models/Users.model";
import UserContoller from "../controllers/Users.controllers";

const userRouter = Router();

const userController = new UserContoller(new UserService(UsersModel));

userRouter.get('/', (req, res) => userController.getAll(req, res));

export default userRouter;