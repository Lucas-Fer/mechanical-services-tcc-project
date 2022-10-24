export default interface IUser extends IUserLogin {
  id?: number;
  name: string;
  phone: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
