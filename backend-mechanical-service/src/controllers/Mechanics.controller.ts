import { Request, Response } from "express";
import MechanicalService from "../services/Mechanical.services";

export default class MechanicalController {
  constructor(private mechanicalService: MechanicalService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.mechanicalService.getAllMechanics();

    return res.status(status).json(response);
  }
}