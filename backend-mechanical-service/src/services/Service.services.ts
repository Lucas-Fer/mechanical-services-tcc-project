import StatusCodes from "../@types/StatusCodes.enum";
import IService from "../@types/Service.interface";
import Services from "../database/models/Services.model";
import UserService from "./Users.services";
import UsersModel from "../database/models/Users.model";
import StatusService from "../@types/StatusService.enum";
import { where } from "sequelize";

type Response = {
  status: number;
  error?: string;
  response?: IService[] | IService | Object | String;
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

  async updateService(params: IService): Promise<Response> {
    const service = await this.getServiceById(params.serviceId as number);

    if (!service) return { status: StatusCodes.NOT_FOUND, error: 'Service not found' };

    const newServiceObject = {
      user_id: service.user_id,
      description: params.description,
      vehicle_model: params.vehicleModel,
      vehicle_brand: params.vehicleBrand,
      vehicle_year: params.vehicleYear,
      status: StatusService.OPEN,
    }

    await this.tableService.update(newServiceObject, {
      where: { service_id: params.serviceId }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }
}