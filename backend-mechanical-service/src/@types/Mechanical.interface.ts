import MechanicalStatus from "./MechanicalStatus.enum";

export default interface IMechanical extends IMechanicalLogin {
  id?: number;
  name: string;
  phone: string;
  autonomous: boolean;
  workstatus: MechanicalStatus;
};

export interface IMechanicalLogin {
  email: string;
  password: string;
}