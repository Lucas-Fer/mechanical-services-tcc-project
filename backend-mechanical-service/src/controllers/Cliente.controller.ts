import { Request, Response } from "express";
import ICliente from "../@types/Cliente.interface";
import ClienteService from "../services/Cliente.services";

export default class ClienteController {
  constructor(private clienteService: ClienteService) { }


  public async getAll(_req: Request, res: Response): Promise<Response> {
    const { status, response } = await this.clienteService.getAllClientes();

    return res.status(status).json(response);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.clienteService.createNewUser(req.body as ICliente);

    return res.status(status).json(response ? response : error);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.clienteService.loginUser(req.body as ICliente);

    return res.status(status).json(response ? response : error);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { params: { id }, body } = req;

    const { status, response, error } = await this.clienteService.updateUser(id as string, body as ICliente);

    return res.status(status).json(response ? response : error);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const { status, response, error } = await this.clienteService.deleteUser(id as string);

    return res.status(status).json(response ? response : error);
  }
} 