import MechanicalStatus from "./MechanicalStatus.enum";

export default interface IMechanical {
  id?: number;
  name: string;
  phone: string;
  email: string;
  password: string;
  autonomous: boolean;
  workstatus: MechanicalStatus;
};