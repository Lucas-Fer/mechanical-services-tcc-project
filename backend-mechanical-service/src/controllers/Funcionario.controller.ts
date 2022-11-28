import { Request, Response } from "express";
import { IFuncionario } from "../@types/Funcionarios.interface";
import FuncionarioService from "../services/Funcionario.services";

export default class FuncionarioController {
  constructor(private funcionarioService: FuncionarioService) { }

  public async create(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.funcionarioService.createNewFuncionario(req.body as IFuncionario);

    return res.status(status).json(response ? response : error);
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { status, response, error } = await this.funcionarioService.loginUser(req.body as IFuncionario);

    return res.status(status).json(response ? response : error);
  }

}