import CarrosModel from "../database/models/Carros.model";
import StatusCodes from "../@types/StatusCodes.enum";
import { ICar } from "../@types/Carros.interface";
import { CarroStatus } from "../@types/CarroStatus.enum";
import AlugueisModel from "../database/models/Alugueis.model";

type Response = {
  status: number;
  error?: string;
  response?: ICar[] | ICar | Object;
}

export default class AlugueisService {
  constructor(private alugueisModel: typeof AlugueisModel) { }

  async getAllAlugueis(): Promise<Response> {
    const allCars = await this.alugueisModel.findAll();

    return { status: StatusCodes.OK, response: allCars };
  }

  async findAluguelById(id: number) {
    const user = await this.alugueisModel.findOne({
      where: {
        carro_id: id,
      }
    });

    return user;
  }

  async createNewCar(params: ICar): Promise<Response> {

    const newClienteObject = {
      carro_marca: params.marca,
      carro_ano: params.ano,
      carro_modelo: params.modelo,
      carro_status: CarroStatus.DISPONIVEL,
    }

    const result = await this.alugueisModel.create(newClienteObject);

    return { status: StatusCodes.CREATED, response: result };
  }

}