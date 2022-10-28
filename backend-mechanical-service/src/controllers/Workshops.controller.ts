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

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.workshopService.loginWorkshop(req.body as IWorkshop);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;
    const { status, response, error } = await this.workshopService.updateWorkshop(id as string, body as IWorkshop);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const { status, response, error } = await this.workshopService.deleteWorkshop(id as string);

    return res.status(status).json(response ? response : error);
  }
}