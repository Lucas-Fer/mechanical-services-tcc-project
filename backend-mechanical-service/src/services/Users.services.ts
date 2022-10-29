import IUser from "../@types/User.interface";
import StatusCodes from "../@types/StatusCodes.enum";
import UsersModel from "../database/models/Users.model";
import UserRole from "../@types/UserRole.enum";

type Response = {
  status: number;
  error?: string;
  response?: IUser[] | IUser | object | any;
}

export default class UserService {
  constructor(private userModel: typeof UsersModel) { }

  async getAllUsers(): Promise<Response> {
    const allUsers = await this.userModel.findAll();
    return { status: StatusCodes.OK, response: allUsers };
  }


  async findUserByEmail(email: string) {
    const user = await this.userModel.findOne({
      where: {
        user_email: email,
      }
    });

    return user;
  }

  async findUserById(id: number) {
    const user = await this.userModel.findOne({
      where: {
        user_id: id,
      }
    });

    return user;
  }

  async createNewUser(params: IUser): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (user) return { status: StatusCodes.BAD_REQUEST, error: 'User already exist!' };

    const newUserObject = {
      user_name: params.name,
      user_email: params.email,
      user_password: params.password,
      user_phone: params.phone,
      user_role: UserRole.CLIENT,
    }

    const result = await this.userModel.create(newUserObject);

    return { status: StatusCodes.CREATED, response: result };
  }

  async loginUser(params: IUser): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    const validateUser = await this.userModel.findOne({
      where: {
        user_email: user.user_email,
        user_password: params.password,
      }
    });

    if (!validateUser) return { status: StatusCodes.BAD_REQUEST, error: 'Incorrect Password!' };

    return { status: StatusCodes.OK, response: validateUser };
  }

  async updateUser(idParams: string, bodyParams: IUser): Promise<Response> {

    const user = await this.findUserById(Number(idParams) as number);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    await this.userModel
      .update({
        user_email: bodyParams.email,
        user_name: bodyParams.name,
        user_password: bodyParams.password,
        user_phone: bodyParams.phone
      }, {
        where: { user_id: idParams }
      });

    return { status: StatusCodes.CREATED, response: 'Update successfully!' };

  }

  async deleteUser(idParams: string): Promise<Response> {
    const user = await this.findUserById(Number(idParams) as number);

    if (!user) return { status: StatusCodes.NOT_FOUND, error: 'User not found!' };

    await this.userModel.destroy({ where: { user_id: Number(idParams) } });

    return { status: StatusCodes.OK, response: 'Delete successfully!' };
  }
}
