import CarrosModel from "../database/models/Carros.model";
import StatusCodes from "../@types/StatusCodes.enum";
import { ICar } from "../@types/Carros.interface";
import { CarroStatus } from "../@types/CarroStatus.enum";

type Response = {
  status: number;
  error?: string;
  response?: ICar[] | ICar | Object;
}

export default class CarrosService {
  constructor(private carrosModel: typeof CarrosModel) { }

  async getAllCars(): Promise<Response> {
    const allCars = await this.carrosModel.findAll();

    return { status: StatusCodes.OK, response: allCars };
  }

  async findCarById(id: number) {
    const user = await this.carrosModel.findOne({
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
      carro_valor: params.valor,
      carro_status: CarroStatus.DISPONIVEL,
    }

    const result = await this.carrosModel.create(newClienteObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async updateCar(idParams: string, bodyParams: ICar): Promise<Response> {

    const user = await this.findCarById(Number(idParams) as number);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'Car not found!' };

    const newServiceObject = {
      carro_status: CarroStatus.ALUGADO,
    }

    await this.carrosModel.update(newServiceObject, {
      where: { carro_id: Number(idParams) }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }


  async deleteCar(idParams: string): Promise<Response> {
    const car = await this.findCarById(Number(idParams) as number);

    if (!car) return { status: StatusCodes.NOT_FOUND, error: 'Car not found' };

    await this.carrosModel.destroy({ where: { carro_id: idParams } });

    return { status: StatusCodes.CREATED, response: 'Delete successfully!' };
  }
}