import StatusCodes from "../@types/StatusCodes.enum";
import IService from "../@types/Service.interface";
import Services from "../database/models/Services.model";
import UserService from "./Users.services";
import UsersModel from "../database/models/Users.model";
import StatusService from "../@types/StatusService.enum";

type Response = {
  status: number;
  error?: string;
  response?: IService[] | IService | Object | string | any;
}

type Object = {
  id: string;
}
export default class Service {
  private _userService: UserService;

  constructor(private tableService: typeof Services) {
    this._userService = new UserService(UsersModel);
  }

  async getAllServices(): Promise<Response> {
    const allServices = await this.tableService.findAll();

    return { status: StatusCodes.OK, response: allServices };
  }

  async createNewService(params: IService): Promise<Response> {
    const findUserById = await this._userService.findUserById(params.userId);

    if (!findUserById) return { status: StatusCodes.NOT_FOUND, error: 'User not found' };

    const newServiceObject = {
      user_id: params.userId,
      description: params.description,
      vehicle_model: params.vehicleModel,
      vehicle_brand: params.vehicleBrand,
      vehicle_year: params.vehicleYear,
      status: StatusService.OPEN,
    }

    const newService = await this.tableService.create(newServiceObject);

    return { status: StatusCodes.CREATED, response: newService };
  }

  async getServiceById(id: number) {
    const findServiceById = await this.tableService.findOne({ where: { service_id: id } });

    return findServiceById;
  }

  async updateService(idParams: string, bodyParams: IService): Promise<Response> {
    const service = await this.getServiceById(Number(idParams) as number);

    if (!service) return { status: StatusCodes.NOT_FOUND, error: 'Service not found' };

    const newServiceObject = {
      user_id: service.user_id,
      description: bodyParams.description,
      vehicle_model: bodyParams.vehicleModel,
      vehicle_brand: bodyParams.vehicleBrand,
      vehicle_year: bodyParams.vehicleYear,
      status: StatusService.OPEN,
    }

    await this.tableService.update(newServiceObject, {
      where: { service_id: idParams }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }

  async deleteService(idParams: string): Promise<Response> {
    const service = await this.getServiceById(Number(idParams) as number);

    if (!service) return { status: StatusCodes.NOT_FOUND, error: 'Service not found' };

    await this.tableService.destroy({ where: { service_id: idParams } });

    return { status: StatusCodes.CREATED, response: 'Delete successfully!' };
  }

  async getUserServices(idParams: string): Promise<Response> {
    const findUserById = await this._userService.findUserById(Number(idParams) as number);

    if (!findUserById) return { status: StatusCodes.NOT_FOUND, error: 'User not found' }

    const result = await this.tableService.findAll({ where: { user_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: result };
  }

}