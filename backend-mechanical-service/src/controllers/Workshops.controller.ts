import { Request, Response } from "express";
import IWorkshop from "../@types/Workshop.interface";
import WorshopService from "../services/Workshop.services";

export default class WorkshopController {
  constructor(private workshopService: WorshopService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.workshopService.getAllWorkshops();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.workshopService.createNewWorkShop(req.body as IWorkshop);

    return res.status(status).json(response ? response : error);
  }
}