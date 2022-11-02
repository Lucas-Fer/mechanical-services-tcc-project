import StatusCodes from "../@types/StatusCodes.enum";
import IMechanical, { IMechanicalLogin } from "../@types/Mechanical.interface";
import Mechanical from "../database/models/Mechanical.model";
import UserRole from "../@types/UserRole.enum";
import WorkshopService from "../services/Workshop.services";
import WorkshopModel from "../database/models/Workshops.model";

type Response = {
  status: number;
  error?: string;
  response?: IMechanical[] | IMechanical | Object;
}

export default class MechanicalService {
  private _workshopService: WorkshopService;
  constructor(private mechanicalModel: typeof Mechanical) {
    this._workshopService = new WorkshopService(WorkshopModel);
  }

  async getAllMechanics(): Promise<Response> {
    const allMechanics = await this.mechanicalModel.findAll();

    return { status: StatusCodes.OK, response: allMechanics };
  }

  async findMechanicalByEmail(email: string) {
    const mechanical = await this.mechanicalModel.findOne({
      where: {
        mechanical_email: email,
      }
    });

    return mechanical;
  }

  async findMechanicalById(id: number) {
    const user = await this.mechanicalModel.findOne({
      where: {
        mechanical_id: id,
      }
    });

    return user;
  }

  async createNewMechanical(workshopId: string, params: IMechanical): Promise<Response> {
    const findMechanical = await this.findMechanicalByEmail(params.email);
    const findWorkshopById = await this._workshopService
      .findWorkshopById(Number(workshopId) as number);

    if (findMechanical) return { status: StatusCodes.BAD_REQUEST, error: 'Mechanical already exists' };
    if (!findWorkshopById) return { status: StatusCodes.NOT_FOUND, error: 'WorkShop not exist!' };

    const newMechanicalObject = {
      mechanical_name: params.name,
      mechanical_email: params.email,
      mechanical_password: params.password,
      work_status: params.workstatus,
      workshop_id: Number(workshopId),
      user_role: UserRole.MECHANICAL,
    }

    const result = await this.mechanicalModel.create(newMechanicalObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async loginMechanical(params: IMechanicalLogin): Promise<Response> {
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

  async updateMechanical(idParams: string, bodyParams: IMechanical): Promise<Response> {
    const mechanical = await this.findMechanicalById(Number(idParams) as number);

    if (!mechanical) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };

    await this.mechanicalModel.update({
      mechanical_name: bodyParams.name,
      mechanical_email: bodyParams.email,
      mechanical_password: bodyParams.password,
    }, {
      where: { mechanical_id: Number(idParams) }
    });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }

  async deleteMechanical(idParams: string): Promise<Response> {
    const mechanical = await this.findMechanicalById(Number(idParams) as number);

    if (!mechanical) return { status: StatusCodes.NOT_FOUND, error: 'Mechanical not found' };

    await this.mechanicalModel.destroy({ where: { mechanical_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: 'Delete successfully!' };
  }

  async findWorkshopMechanicals(id: string): Promise<Response> {
    const mechanicals = await this.mechanicalModel.findAll({
      include: [{
        model: WorkshopModel,
        required: true,
        where: { workshop_id: Number(id) }
      }]
    });

    return { status: StatusCodes.OK, response: mechanicals };
  }
}