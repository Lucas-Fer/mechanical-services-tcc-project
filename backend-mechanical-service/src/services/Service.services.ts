import StatusCodes from "../@types/StatusCodes.enum";
import IService from "../@types/Service.interface";
import Services from "../database/models/Services.model";

type Response = {
  status: number;
  error?: string;
  response?: IService[] | IService | Object;
}

export default class Service {
  constructor(private tableService: typeof Services) { }

  async getAllServices(): Promise<Response> {
    const allServices = await this.tableService.findAll();

    return { status: StatusCodes.OK, response: allServices };
  }
}