import StatusCodes from "../@types/StatusCodes.enum";
import IManager, { IManagerLogin } from "../@types/Managers.interface";
import ManagersModel from "../database/models/Managers.model";
import WorkshopService from "./Workshop.services";
import WorkshopModel from "../database/models/Workshops.model";
import UserRole from "../@types/UserRole.enum";

type Response = {
  status: number;
  error?: string;
  response?: IManager[] | IManager | Object;
}

export default class ManagersService {
  private _workshopService: WorkshopService;
  constructor(private managerModel: typeof ManagersModel) {
    this._workshopService = new WorkshopService(WorkshopModel);
  }

  async getAllManagers(): Promise<Response> {
    const allManagers = await this.managerModel.findAll();

    return { status: StatusCodes.OK, response: allManagers };
  }

  async findManagerByEmail(email: string) {
    const manager = await this.managerModel.findOne({
      where: {
        manager_email: email,
      }
    });

    return manager;
  }

  async findManagerById(id: number) {
    const manager = await this.managerModel.findOne({
      where: {
        manager_id: id,
      }
    });

    return manager;
  }

  async loginManager(params: IManagerLogin): Promise<Response> {
    const manager = await this.findManagerByEmail(params.email as string);

    if (!manager) return { status: StatusCodes.NOT_FOUND, error: 'Manager not found' };

    const validadeManager = await this.managerModel.findOne({
      where: {
        manager_email: params.email,
        manager_password: params.password,
      }
    });

    if (!validadeManager) return { status: StatusCodes.NOT_FOUND, error: 'Incorrect password' };

    return { status: StatusCodes.OK, response: validadeManager };
  }

  async createNewManager(workshopId: string, params: IManager): Promise<Response> {
    const findManager = await this.findManagerByEmail(params.email);
    const findWorkshopById = await this._workshopService
      .findWorkshopById(Number(workshopId) as number);

    if (findManager) return { status: StatusCodes.BAD_REQUEST, error: 'Mechanical already exists' };
    if (!findWorkshopById) return { status: StatusCodes.NOT_FOUND, error: 'WorkShop not exist!' };

    const newManagerObject = {
      manager_name: params.name,
      manager_email: params.email,
      manager_password: params.password,
      workshop_id: Number(workshopId),
      user_role: UserRole.MANAGER,
    }

    const result = await this.managerModel.create(newManagerObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async updateManager(managerId: string, bodyParams: IManager): Promise<Response> {
    const findManager = await this.findManagerById(Number(managerId) as number);

    if (!findManager) return { status: StatusCodes.NOT_FOUND, error: 'Manager not found' };

    await this.managerModel.update({
      manager_name: bodyParams.name,
      manager_email: bodyParams.email,
      manager_password: bodyParams.password,
    }, {
      where: { manager_id: Number(managerId) }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }


  async deleteManager(idParams: string): Promise<Response> {
    const manager = await this.findManagerById(Number(idParams) as number);

    if (!manager) return { status: StatusCodes.NOT_FOUND, error: 'Manager not found' };

    await this.managerModel.destroy({ where: { manager_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: 'Delete successfully!' };
  }

}