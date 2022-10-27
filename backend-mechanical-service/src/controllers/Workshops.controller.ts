import { Request, Response } from "express";
import WorshopService from "../services/Workshop.services";

export default class WorkshopController {
  constructor(private workshopService: WorshopService) { }

  public async getAll(req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.workshopService.getAllWorkshops();

    return res.status(status).json(response);
  }
}