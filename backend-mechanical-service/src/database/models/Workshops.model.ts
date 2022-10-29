import { DataTypes, Model } from "sequelize";
import UserRole from "../../@types/UserRole.enum";
import db from '.';

export default class WorkshopModel extends Model {
  public user_id!: number;
  public workshop_name!: string;
  public workshop_email!: string;
  public workshop_password!: string;
  public workshop_location!: string;
  public user_role?: string;
}

WorkshopModel.init({
  workshop_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  workshop_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workshop_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workshop_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  workshop_location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.ENUM(UserRole.ADMIN),
    allowNull: true,
  },
}, {
  modelName: 'workshops',
  underscored: true,
  sequelize: db,
  timestamps: false,
});