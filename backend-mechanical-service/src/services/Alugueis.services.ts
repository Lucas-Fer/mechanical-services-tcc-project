import StatusCodes from "../@types/StatusCodes.enum";
import AlugueisModel from "../database/models/Alugueis.model";
import { IAluguel } from "../@types/Aluguel.interface";
import ClientesModel from "../database/models/Clientes.model";
import CarrosModel from "../database/models/Carros.model";

type Response = {
  status: number;
  error?: string;
  response?: IAluguel[] | IAluguel | Object;
}

export default class AlugueisService {
  constructor(private alugueisModel: typeof AlugueisModel) { }

  async getAllAlugueis(): Promise<Response> {

    const allCars = await this.alugueisModel.findAll({
      include: [{
        model: ClientesModel,
        required: true,
      },
      {
        model: CarrosModel,
        required: true,
      }]
    });

    return { status: StatusCodes.OK, response: allCars };
  }

  async findAluguelById(id: number) {
    const user = await this.alugueisModel.findOne({
      where: {
        aluguel_id: id,
      }
    });

    return user;
  }

  async createNewAluguel(params: IAluguel): Promise<Response> {

    const newClienteObject = {
      cliente_id: params.clienteId,
      carro_id: params.carroId,
    }

    const result = await this.alugueisModel.create(newClienteObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async deleteAluguel(id: string): Promise<Response> {
    const aluguel = await this.findAluguelById(Number(id) as number);

    if (!aluguel) return { status: StatusCodes.NOT_FOUND, error: 'Aluguel not found' };

    await this.alugueisModel.destroy({ where: { aluguel_id: id } });

    return { status: StatusCodes.CREATED, response: 'Delete successfully!' };
  }

}