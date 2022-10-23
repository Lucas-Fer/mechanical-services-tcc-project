import { Request, Response } from "express";
import UserService from "../services/Users.services";

export default class UserContoller {
  constructor(private userService: UserService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    console.log(this.userService);

    const { status, response } = await this.userService.getAllUsers();

    return res.status(status).json(response);
  }
}