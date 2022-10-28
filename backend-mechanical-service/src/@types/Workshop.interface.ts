export default interface IWorkshop extends IWorkshopLogin {
  id?: number;
  name: string;
  location: string;
}

export interface IWorkshopLogin {
  email: string;
  password: string;
}