import { Request, Response } from "express";
import Service from "../services/Service.services";

export default class ServiceController {
  constructor(private userService: Service) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.userService.getAllServices();

    return res.status(status).json(response);
  }
}