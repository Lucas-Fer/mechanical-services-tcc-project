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
}