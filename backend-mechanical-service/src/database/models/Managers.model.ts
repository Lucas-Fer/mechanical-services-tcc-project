import { DataTypes, Model } from "sequelize";
import db from '.';

export default class ManagersModel extends Model {
  public manager_id!: number;
  public manager_name!: string;
  public manager_email!: string;
  public manager_password!: string;
  public workshop_id!: number;
}

ManagersModel.init({
  manager_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  manager_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  manager_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'managers',
  underscored: true,
  sequelize: db,
  timestamps: false,
})