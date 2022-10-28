import { DataTypes, Model } from 'sequelize';
import MechanicalStatus from '../../@types/MechanicalStatus.enum';
import db from '.';
import WorkshopModel from './Workshops.model';

export default class Mechanical extends Model {
  public mechanical_id: number;
  public mechanical_name!: string;
  public mechanical_email!: string;
  public mechanical_password!: string;
  public work_status!: MechanicalStatus;
  public mechanical_workshop: number;
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
}, {
  modelName: 'mechanicals',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Mechanical.belongsTo(WorkshopModel, { foreignKey: 'workshop_id' });
