import { Request, Response } from "express";
import IMechanical from "../@types/Mechanical.interface";
import MechanicalService from "../services/Mechanical.services";

export default class MechanicalController {
  constructor(private mechanicalService: MechanicalService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.mechanicalService.getAllMechanics();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.mechanicalService
      .createNewMechanical(req.body as IMechanical);

    return res.status(status).json(response ? response : error);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.mechanicalService.loginMechanical(req.body);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.mechanicalService.updateMechanical(req.body);

    return res.status(status).json(response ? response : error);

  }
}