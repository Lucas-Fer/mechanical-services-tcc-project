import { Request, Response } from "express";
import { IManagerLogin } from "../@types/Managers.interface";
import ManagersService from "../services/Managers.services";

export default class ManagerController {
  constructor(private managerService: ManagersService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.managerService.getAllManagers();

    return res.status(status).json(response);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.managerService.loginManager(req.body as IManagerLogin);

    return res.status(status).json(response ? response : error);
  }
}