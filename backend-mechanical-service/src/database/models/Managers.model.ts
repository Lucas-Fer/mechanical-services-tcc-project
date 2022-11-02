import { DataTypes, Model } from "sequelize";
import UserRole from "../../@types/UserRole.enum";
import db from '.';
import WorkshopModel from "./Workshops.model";

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
  workshop_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: WorkshopModel,
      key: 'workshop_id',
    },
  },
  user_role: {
    type: DataTypes.ENUM(UserRole.MANAGER),
    allowNull: true,
  },
}, {
  modelName: 'managers',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

ManagersModel.belongsTo(WorkshopModel, { foreignKey: 'workshop_id' });
WorkshopModel.hasMany(ManagersModel, { foreignKey: 'manager_id' });
