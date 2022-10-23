import StatusCodes from "../@types/StatusCodes.enum";
import UsersModel from "../database/models/Users.model";

type Response = {
  status: number;
  response: any;
}

export default class UserService {
  constructor(private userModel: typeof UsersModel) { }

  async getAllUsers(): Promise<Response> {
    const allUsers = await this.userModel.findAll();
    return { status: StatusCodes.OK, response: allUsers };
  }
}
