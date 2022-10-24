import { Request, Response } from "express";
import UserService from "../services/Users.services";

export default class UserContoller {
  constructor(private userService: UserService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.userService.getAllUsers();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.userService.createNewUser(req.body);

    return res.status(status).json(response);
  }
}