import { CarroStatus } from "./CarroStatus.enum";

export interface ICar {
  id?: number;
  modelo: string;
  ano: number;
  marca: string;
  status: CarroStatus;
  valor: number;
} 