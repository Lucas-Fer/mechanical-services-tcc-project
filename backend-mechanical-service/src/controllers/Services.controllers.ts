import { Request, Response } from "express";
import IService from "../@types/Service.interface";
import Service from "../services/Service.services";

export default class ServiceController {
  constructor(private userService: Service) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.userService.getAllServices();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.userService.createNewService(req.body as IService);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.userService.updateService(req.body as IService);

    return res.status(status).json(response ? response : error);
  }
}