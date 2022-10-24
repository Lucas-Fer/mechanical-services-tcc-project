export default interface IUser extends IUserLogin {
  name: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
