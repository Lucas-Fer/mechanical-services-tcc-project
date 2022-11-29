import { Request, Response } from "express";
import { IAluguel } from "../@types/Aluguel.interface";
import AlugueisService from "../services/Alugueis.services";

export default class AlugueisController {
  constructor(private aluguelService: AlugueisService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.aluguelService.getAllAlugueis();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.aluguelService.createNewAluguel(req.body as IAluguel);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.aluguelService.deleteAluguel(id as string);

    return res.status(status).json(response ? response : error);
  }
}