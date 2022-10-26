import StatusService from "./StatusService.enum";

export default interface IService {
  userId: number;
  description: string;
  vehicleModel: string;
  vehicleBrand: string;
  vehicleYear: number;
  status: StatusService;
}