import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class ClientesModel extends Model {
  public cliente_id!: number;
  public cliente_nome!: string;
  public cliente_email!: string;
  public cliente_senha!: string;
  public carteira_motorista!: string;
}

ClientesModel.init({
  cliente_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cliente_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cliente_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cliente_senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carteira_motorista: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'clientes',
  underscored: true,
  sequelize: db,
  timestamps: false,
});


