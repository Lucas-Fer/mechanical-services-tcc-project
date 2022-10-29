import { Request, Response } from "express";
import IManager, { IManagerLogin } from "../@types/Managers.interface";
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

  public async update(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;
    const { status, response, error } = await this.managerService.updateManager(id, body as IManager);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const { status, response, error } = await this.managerService.deleteManager(id);

    return res.status(status).json(response ? response : error);
  }
}