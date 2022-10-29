import StatusCodes from "../@types/StatusCodes.enum";
import IManager from "../@types/Managers.interface";
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

}