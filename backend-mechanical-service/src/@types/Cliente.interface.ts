export default interface ICliente extends IClienteLogin {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  carteiraMotorista: string;
}

export interface IClienteLogin {
  email: string;
  senha: string;
}