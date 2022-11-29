import { DataTypes, Model } from "sequelize";
import db from '.';
import CarrosModel from "./Carros.model";
import ClientesModel from "./Clientes.model";

export default class AlugueisModel extends Model {
  public aluguel_id!: number;
  public cliente_id!: number;
  public carro_id!: number;
}

AlugueisModel.init({
  aluguel_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: ClientesModel,
      key: 'cliente_id',
    },
  },
  carro_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: CarrosModel,
      key: 'carro_id',
    },
  },
}, {
  modelName: 'alugueis',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

AlugueisModel.belongsTo(ClientesModel, { foreignKey: 'cliente_id' });
AlugueisModel.belongsTo(CarrosModel, { foreignKey: 'carro_id' });
