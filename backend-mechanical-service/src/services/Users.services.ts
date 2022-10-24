import IUser from "../@types/User.interface";
import StatusCodes from "../@types/StatusCodes.enum";
import UsersModel from "../database/models/Users.model";

type Response = {
  status: number;
  error?: string;
  response: IUser[] | IUser | object;
}

export default class UserService {
  constructor(private userModel: typeof UsersModel) { }

  async getAllUsers(): Promise<Response> {
    const allUsers = await this.userModel.findAll();
    return { status: StatusCodes.OK, response: allUsers };
  }

  async createNewUser(params: any) {
    console.log(params);

    const user = await this.userModel.findOne({
      where: {
        user_email: params.user_email,
      }
    });

    if (user) return { status: StatusCodes.UNAUTHORIZED, response: 'User already exist!' };

    const result = await this.userModel.create(params);

    return { status: StatusCodes.CREATED, response: result };
  }


}
