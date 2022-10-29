import StatusCodes from "../@types/StatusCodes.enum";
import IWorkshop, { IWorkshopLogin } from "../@types/Workshop.interface";
import WorkshopModel from "../database/models/Workshops.model";
import UserRole from "../@types/UserRole.enum";

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

  async findWorkshopById(id: number) {
    const workshop = await this.workshopModel.findOne({
      where: {
        workshop_id: id,
      }
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
      user_role: UserRole.ADMIN,
    }

    const result = await this.workshopModel.create(newUserObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async loginWorkshop(params: IWorkshopLogin): Promise<Response> {
    const workshop = await this.findWorkshopByEmail(params.email);

    if (!workshop) return { status: StatusCodes.NOT_FOUND, error: 'Workshop not found!' };

    const validateWorkshop = await this.workshopModel.findOne({
      where: {
        workshop_email: workshop.workshop_email,
        workshop_password: params.password,
      }
    });

    if (!validateWorkshop) return { status: StatusCodes.BAD_REQUEST, error: 'Incorrect Password!' };

    return { status: StatusCodes.OK, response: validateWorkshop };
  }

  async updateWorkshop(idParams: string, bodyParams: IWorkshop): Promise<Response> {
    const workshop = await this.findWorkshopById(Number(idParams) as number);

    if (!workshop) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    await this.workshopModel
      .update({
        workshop_name: bodyParams.name,
        workshop_email: bodyParams.email,
        workshop_password: bodyParams.password,
        workshop_location: bodyParams.location,
      }, {
        where: { workshop_id: idParams }
      });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };
  }

  async deleteWorkshop(idParams: string): Promise<Response> {
    const workshop = await this.findWorkshopById(Number(idParams) as number);

    if (!workshop) return { status: StatusCodes.NOT_FOUND, error: 'Workshop not found!' };

    await this.workshopModel.destroy({ where: { workshop_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: 'Delete successfully!' };
  }
}