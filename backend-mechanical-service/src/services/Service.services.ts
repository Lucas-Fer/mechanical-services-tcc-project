import StatusCodes from "../@types/StatusCodes.enum";
import IService from "../@types/Service.interface";
import Services from "../database/models/Services.model";
import UserService from "./Users.services";
import UsersModel from "../database/models/Users.model";
import StatusService from "../@types/StatusService.enum";

type Response = {
  status: number;
  error?: string;
  response?: IService[] | IService | Object;
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

    const result = await this.tableService.create(newServiceObject);

    return { status: StatusCodes.CREATED, response: result };
  }
}