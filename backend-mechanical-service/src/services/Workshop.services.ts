import StatusCodes from "../@types/StatusCodes.enum";
import IWorkshop from "../@types/Workshop.interface";
import WorkshopModel from "../database/models/Workshops.model";

type Response = {
  status: number;
  error?: string;
  response?: IWorkshop[] | IWorkshop | object | any;
}

export default class WorkshopService {
  constructor(private workshopModel: typeof WorkshopModel) { }

  async getAllWorkshops(): Promise<Response> {
    const allWorkshops = await this.workshopModel.findAll();

    return { status: StatusCodes.OK, response: allWorkshops };
  }
}