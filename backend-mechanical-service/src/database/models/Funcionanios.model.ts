import { DataTypes, Model } from "sequelize";
import db from '.';

export default class FuncionariosModel extends Model {
  public funcionario_id!: number;
  public funcionario_nome!: string;
  public funcionario_email!: string;
  public funcionario_senha!: string;
}

FuncionariosModel.init({
  funcionario_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  funcionario_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  funcionario_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  funcionario_senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'funcionarios',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

