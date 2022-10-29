
export default interface IManager extends IManagerLogin {
  id?: number;
  name: string;
  workshopId: number;
};

export interface IManagerLogin {
  email: string;
  password: string;
}
