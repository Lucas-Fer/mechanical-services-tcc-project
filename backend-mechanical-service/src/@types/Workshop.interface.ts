export default interface IWorkshop {
  id?: number;
  name: string;
  workshop_location: string;
}

export interface IWorkshopLogin {
  email: string;
  password: string;
}