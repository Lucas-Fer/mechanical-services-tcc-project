import StatusCodes from "../@types/StatusCodes.enum";
import { IFuncionario } from "../@types/Funcionarios.interface";
import FuncionariosModel from "../database/models/Funcionanios.model";
import { IClienteLogin } from "../@types/Cliente.interface";

type Response = {
  status: number;
  error?: string;
  response?: IFuncionario[] | IFuncionario | Object;
}

export default class FuncionarioService {
  constructor(private funcionarioModel: typeof FuncionariosModel) { }

  async findUserByEmail(email: string) {
    const user = await this.funcionarioModel.findOne({
      where: {
        funcionario_email: email,
      }
    });

    return user;
  }

  async createNewFuncionario(params: IFuncionario): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (user) return { status: StatusCodes.BAD_REQUEST, error: 'User already exist!' };

    const newClienteObject = {
      funcionario_nome: params.nome,
      funcionario_email: params.email,
      funcionario_senha: params.senha,
    }

    const result = await this.funcionarioModel.create(newClienteObject);

    return { status: StatusCodes.CREATED, response: result };
  }



  async loginUser(params: IClienteLogin): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    const validateUser = await this.funcionarioModel.findOne({
      where: {
        funcionario_email: user.funcionario_email,
        funcionario_senha: params.senha,
      }
    });

    if (!validateUser) return { status: StatusCodes.BAD_REQUEST, error: 'Incorrect Password!' };

    return { status: StatusCodes.OK, response: validateUser };
  }
}