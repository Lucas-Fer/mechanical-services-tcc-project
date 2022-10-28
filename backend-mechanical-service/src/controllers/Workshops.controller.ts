import { Request, Response } from "express";
import MechanicalService from "../services/Mechanical.services";
import IMechanical from "../@types/Mechanical.interface";
import IWorkshop from "../@types/Workshop.interface";
import WorshopService from "../services/Workshop.services";
import Mechanical from "../database/models/Mechanical.model";

export default class WorkshopController {
  private _mechanicalService: MechanicalService;
  constructor(private workshopService: WorshopService) {
    this._mechanicalService = new MechanicalService(Mechanical);
  }

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

  public async createMechanical(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;

    const { status, response, error } = await this._mechanicalService
      .createNewMechanical(id as string, body as IMechanical);

    return res.status(status).json(response ? response : error);
  }
}