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

  async loginManager(params: IManagerLogin): Promise<Response> {
    const mechanical = await this.findMechanicalByEmail(params.email as string);

    if (!mechanical) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };

    const validadeMechanical = await this.mechanicalModel.findOne({
      where: {
        mechanical_email: params.email,
        mechanical_password: params.password,
      }
    });

    if (!validadeMechanical) return { status: StatusCodes.NOT_FOUND, error: 'Incorrect password' };

    return { status: StatusCodes.OK, response: validadeMechanical };
  }

}