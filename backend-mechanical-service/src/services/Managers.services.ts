import StatusCodes from "../@types/StatusCodes.enum";
import IManager, { IManagerLogin } from "../@types/Managers.interface";
import ManagersModel from "../database/models/Managers.model";

type Response = {
  status: number;
  error?: string;
  response?: IManager[] | IManager | Object;
}

export default class ManagersService {
  constructor(private managerModel: typeof ManagersModel) { }

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

}