import StatusCodes from "../@types/StatusCodes.enum";
import IMechanical from "../@types/Mechanical.interface";
import Mechanical from "../database/models/Mechanical.model";

type Response = {
  status: number;
  error?: string;
  response?: IMechanical[] | IMechanical | Object;
}

export default class MechanicalService {
  constructor(private mechanicalModel: typeof Mechanical) { }

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

  async createNewMechanical(params: IMechanical): Promise<Response> {
    const mechanical = await this.findMechanicalByEmail(params.email);

    if (mechanical) return { status: StatusCodes.BAD_REQUEST, error: 'Mechanical already exists' };

    const newMechanicalObject = {
      mechanical_name: params.name,
      mechanical_email: params.email,
      mechanical_password: params.password,
      mechanical_phone: params.phone,
      autonomous: params.autonomous,
      workshop: params.workshop ? params.workshop : null,
    }

    const result = await this.mechanicalModel.create(newMechanicalObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async loginMechanical(params: IMechanical): Promise<Response> {
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
      mechanical_phone: bodyParams.phone,
      autonomous: bodyParams.autonomous,
      workshop: bodyParams.workshop
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
}