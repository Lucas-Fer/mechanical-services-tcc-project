import ICliente from "../@types/Cliente.interface";
import StatusCodes from "../@types/StatusCodes.enum";
import ClientesModel from "../database/models/Clientes.model";

type Response = {
  status: number;
  error?: string;
  response?: ICliente[] | ICliente | Object;
}

export default class ClienteService {
  constructor(private clienteModel: typeof ClientesModel) { }

  async getAllClientes(): Promise<Response> {
    const allClientes = await this.clienteModel.findAll();

    return { status: StatusCodes.OK, response: allClientes };
  }

  async findUserByEmail(email: string) {
    const user = await this.clienteModel.findOne({
      where: {
        cliente_email: email,
      }
    });

    return user;
  }


  async findUserById(id: number) {
    const user = await this.clienteModel.findOne({
      where: {
        cliente_id: id,
      }
    });

    return user;
  }

  async createNewUser(params: ICliente): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (user) return { status: StatusCodes.BAD_REQUEST, error: 'User already exist!' };

    const newClienteObject = {
      cliente_nome: params.nome,
      cliente_email: params.email,
      cliente_senha: params.senha,
      carteira_motorista: params.carteiraMotorista,
    }

    const result = await this.clienteModel.create(newClienteObject);

    return { status: StatusCodes.CREATED, response: result };
  }


  async loginUser(params: ICliente): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    const validateUser = await this.clienteModel.findOne({
      where: {
        cliente_email: user.cliente_email,
        cliente_senha: params.senha,
      }
    });

    if (!validateUser) return { status: StatusCodes.BAD_REQUEST, error: 'Incorrect Password!' };

    return { status: StatusCodes.OK, response: validateUser };
  }

  async updateUser(idParams: string, bodyParams: ICliente): Promise<Response> {

    const user = await this.findUserById(Number(idParams) as number);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    await this.clienteModel
      .update({
        cliente_email: bodyParams.email,
        cliente_nome: bodyParams.nome,
        cliente_senha: bodyParams.senha,
        carteira_motorista: bodyParams.carteiraMotorista
      }, {
        where: { cliente_id: idParams }
      });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };

  }

  async deleteUser(idParams: string): Promise<Response> {
    const user = await this.findUserById(Number(idParams) as number);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    await this.clienteModel.destroy({ where: { cliente_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: 'Delete successfully!' };
  }
}