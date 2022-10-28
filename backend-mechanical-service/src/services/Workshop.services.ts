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

  async findWorkshopByEmail(email: string) {
    const workshop = await this.workshopModel.findOne({
      where: { workshop_email: email }
    });

    return workshop;
  }

  async createNewWorkShop(params: IWorkshop): Promise<Response> {
    const workshop = await this.findWorkshopByEmail(params.email);

    if (workshop) return { status: StatusCodes.BAD_REQUEST, error: 'User already exist!' };

    const newUserObject = {
      workshop_name: params.name,
      workshop_email: params.email,
      workshop_password: params.password,
      workshop_location: params.location,
    }

    const result = await this.workshopModel.create(newUserObject);

    return { status: StatusCodes.CREATED, response: result };
  }
}