import { Request, Response } from "express";
import { ICar } from "../@types/Carros.interface";
import CarrosService from "../services/Carros.services";

export default class CarroController {
  constructor(private carroService: CarrosService) { }

  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.carroService.getAllCars();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.carroService.createNewCar(req.body as ICar);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;

    const { status, response, error } = await this.carroService.updateCar(id as string, body as ICar);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.carroService.deleteCar(id as string);

    return res.status(status).json(response ? response : error);
  }
}