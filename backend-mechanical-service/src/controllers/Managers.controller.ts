import { Request, Response } from "express";
import ManagersService from "../services/Managers.services";

export default class ManagerController {
  constructor(private managerService: ManagersService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.managerService.getAllManagers();

    return res.status(status).json(response);
  }
}