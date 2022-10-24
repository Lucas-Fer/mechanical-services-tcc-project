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

  async createNewMechanical(params: any): Promise<Response> {
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
}