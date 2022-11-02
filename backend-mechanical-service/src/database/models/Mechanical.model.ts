import { DataTypes, Model } from 'sequelize';
import MechanicalStatus from '../../@types/MechanicalStatus.enum';
import db from '.';
import WorkshopModel from './Workshops.model';
import UserRole from '../../@types/UserRole.enum';

export default class Mechanical extends Model {
  public mechanical_id: number;
  public mechanical_name!: string;
  public mechanical_email!: string;
  public mechanical_password!: string;
  public work_status!: MechanicalStatus;
  public workshop_id: number;
}

Mechanical.init({
  mechanical_id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  mechanical_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mechanical_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mechanical_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  work_status: {
    type: DataTypes.BOOLEAN,
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
    type: DataTypes.ENUM(UserRole.MECHANICAL),
    allowNull: true,
  },
}, {
  modelName: 'mechanicals',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Mechanical.belongsTo(WorkshopModel, { foreignKey: 'workshop_id' });
WorkshopModel.hasMany(Mechanical, { foreignKey: 'mechanical_id' });
