import { DataTypes, Model } from "sequelize";
import db from '.';

export default class CarrosModel extends Model {
  public carro_id!: number;
  public carro_modelo!: string;
  public carro_ano!: number;
  public carro_marca!: string;
  public carro_status!: string;
}

CarrosModel.init({
  carro_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  carro_modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carro_ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  carro_marca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  carro_status: {
    type: DataTypes.ENUM('DISPONIVEL', 'ALUGADO'),
    allowNull: false,
  },
}, {
  modelName: 'carros',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

