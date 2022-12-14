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
    const { status, response, error } = await this.userService.loginUser(req.body as IUser);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;

    const { status, response, error } = await this.userService.updateUser(id as string, body as IUser);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.userService.deleteUser(id as string);

    return res.status(status).json(response ? response : error);
  }
}