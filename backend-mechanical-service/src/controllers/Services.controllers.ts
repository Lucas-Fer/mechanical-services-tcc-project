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
    const { params: { id }, body } = req;

    const { status, response, error } = await this.userService.updateService(id as string, body as IService);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.userService.deleteService(id as string);

    return res.status(status).json(response ? response : error);
  }

  public async getUserServices(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.userService.getUserServices(id as string);

    return res.status(status).json(response ? response : error);
  }
}