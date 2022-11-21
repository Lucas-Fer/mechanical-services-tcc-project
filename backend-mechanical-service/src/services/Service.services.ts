import StatusCodes from "../@types/StatusCodes.enum";
import IService from "../@types/Service.interface";
import Services from "../database/models/Services.model";
import UserService from "./Users.services";
import UsersModel from "../database/models/Users.model";
import StatusService from "../@types/StatusService.enum";
import MechanicalService from "./Mechanical.services";
import Mechanical from "../database/models/Mechanical.model";
import WorkshopService from "./Workshop.services";
import WorkshopModel from "../database/models/Workshops.model";

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
  private _mechanicalService: MechanicalService;
  private _workshopService: WorkshopService;

  constructor(private tableService: typeof Services) {
    this._userService = new UserService(UsersModel);
    this._mechanicalService = new MechanicalService(Mechanical);
    this._workshopService = new WorkshopService(WorkshopModel);
  }

  async getAllServices(): Promise<Response> {
    const allServices = await this.tableService.findAll({
      include: [{
        model: UsersModel,
        required: true,
      }, { model: Mechanical }]
    });

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
    const findServiceById = await this.tableService.findOne({
      where: { service_id: id },
      include: [
        {
          model: UsersModel,
        }, {
          model: Mechanical,
        }
      ]
    });

    return findServiceById;
  }

  async getAllServicesByMechanical(mechanicalId: string): Promise<Response> {
    const findMechanicalById = await this._mechanicalService.
      findMechanicalById(Number(mechanicalId) as number);

    if (!findMechanicalById) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };

    const findAllServicesByMechanical = await this.tableService.findAll({
      where: {
        mechanical_id: Number(mechanicalId),
      }
    });

    return { status: StatusCodes.OK, response: findAllServicesByMechanical };

  }

  async updateServiceByUser(idService: string, bodyParams: IService): Promise<Response> {
    const service = await this.getServiceById(Number(idService) as number);

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
      where: { service_id: Number(idService) }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }

  async updateServiceByManager(idService: string, bodyParams: IService): Promise<Response> {
    if (!bodyParams.mechanicalId) return { status: StatusCodes.BAD_REQUEST, error: 'Mechanical field required!' };

    const service = await this.getServiceById(Number(idService) as number);
    const findMechanicalById = await this._mechanicalService.
      findMechanicalById(Number(bodyParams.mechanicalId));

    if (!service) return { status: StatusCodes.NOT_FOUND, error: 'Service not found' };
    if (!findMechanicalById) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };


    const newServiceObject = {
      mechanical_id: Number(bodyParams.mechanicalId),
      status: StatusService.PROGRESS,
    }

    await this.tableService.update(newServiceObject, {
      where: { service_id: Number(idService) }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }

  async updateServiceByMechanical(idService: string, bodyParams: IService): Promise<Response> {
    const service = await this.getServiceById(Number(idService) as number);
    const mechanical = await this._mechanicalService.findMechanicalById(bodyParams.mechanicalId as number);

    if (!service) return { status: StatusCodes.NOT_FOUND, error: 'Service not found' };
    if (!mechanical) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };
    if (service.mechanical_id !== bodyParams.mechanicalId) return {
      status: StatusCodes.UNAUTHORIZED, error: 'This service is not yours'
    };

    const newServiceObject = {
      mechanical_id: Number(bodyParams.mechanicalId),
      status: StatusService.COMPLETED,
    }

    await this.tableService.update(newServiceObject, {
      where: { service_id: Number(idService) }
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

    const result = await this.tableService.findAll({
      where: { user_id: Number(idParams) },
      include: [{
        model: UsersModel,
        required: true,
      }]
    });

    return { status: StatusCodes.OK, response: result };
  }

  async getWorkshopServices(idWorkshop: string): Promise<Response> {
    const findWorkshopById = await this._workshopService.findWorkshopById(Number(idWorkshop));

    if (!findWorkshopById) return { status: StatusCodes.NOT_FOUND, error: 'Workshop not found' };

    const allWorkshopServices = await this.tableService.findAll({
      include: [{
        model: UsersModel,
        required: true,
      }, { model: Mechanical, where: { workshop_id: idWorkshop } }],

    });
    return { status: StatusCodes.OK, response: allWorkshopServices };
  }

  async getMechanicalServices(mechanicalId: string): Promise<Response> {
    const findUserById = await this._userService.findUserById(Number(mechanicalId) as number);

    if (!findUserById) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' }

    const allMechanicalServices = await this.tableService.findAll({ where: { mechanical_id: mechanicalId } })
    return { status: StatusCodes.OK, response: allMechanicalServices };
  }
}