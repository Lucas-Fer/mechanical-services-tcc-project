import { Request, Response } from "express";
import MechanicalService from "../services/Mechanical.services";
import IMechanical from "../@types/Mechanical.interface";
import IWorkshop from "../@types/Workshop.interface";
import WorshopService from "../services/Workshop.services";
import Mechanical from "../database/models/Mechanical.model";
import ManagersService from "../services/Managers.services";
import ManagersModel from "../database/models/Managers.model";
import IManager from "../@types/Managers.interface";

export default class WorkshopController {
  private _mechanicalService: MechanicalService;
  private _managerService: ManagersService;
  constructor(private workshopService: WorshopService) {
    this._mechanicalService = new MechanicalService(Mechanical);
    this._managerService = new ManagersService(ManagersModel);
  }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.workshopService.getAllWorkshops();

    return res.status(status).json(response);
  }

  public async getAllWorkshopManagers(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const { status, response } = await this._managerService.findWorkshopManagers(id as string);

    return res.status(status).json(response);
  }

  public async getAllWorkshopMechanicals(req: Request, res: Response): Promise<Response> {
    const { params: { id } } = req;
    const { status, response } = await this._mechanicalService.findWorkshopMechanicals(id as string);

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

  public async createManager(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;

    const { status, response, error } = await this._managerService
      .createNewManager(id as string, body as IManager);

    return res.status(status).json(response ? response : error);
  }

  async findWorkshopEmployees(req: Request, res: Response): Promise<Response> {
    const mechanicals = await this._mechanicalService.findWorkshopMechanicals(req.params.id);
    const manager = await this._managerService.findWorkshopManagers(req.params.id);

    const result = {
      mechanicals,
      manager
    }

    return res.status(200).json(result);

  }
}