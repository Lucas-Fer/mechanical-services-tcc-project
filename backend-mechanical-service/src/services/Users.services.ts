import IUser from "../@types/User.interface";
import StatusCodes from "../@types/StatusCodes.enum";
import UsersModel from "../database/models/Users.model";

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

  async createNewUser(params: any): Promise<Response> {
    const user = await this.findUserByEmail(params.email);

    if (user) return { status: StatusCodes.BAD_REQUEST, error: 'User already exist!' };

    const result = await this.userModel.create(params);

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

  async updateUser(params: IUser): Promise<Response> {
    const { email, name, password, phone, id } = params;

    const result = await this.userModel
      .update({
        user_email: email,
        user_name: name,
        user_password: password,
        user_phone: phone
      }, {
        where: { user_id: id }
      });

    return { status: StatusCodes.CREATED, response: result };
  }
}
