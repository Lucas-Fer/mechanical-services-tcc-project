import { Request, Response } from "express";
import IUser from "../@types/User.interface";
import UserService from "../services/Users.services";

export default class UserContoller {
  constructor(private userService: UserService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.userService.getAllUsers();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.userService.createNewUser(req.body as IUser);

    return res.status(status).json(response ? response : error);
  }
  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.userService.loginUser(req.body)

    return res.status(status).json(response ? response : error);
  }
}