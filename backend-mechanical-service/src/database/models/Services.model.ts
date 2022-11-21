import { DataTypes, Model } from 'sequelize';
import StatusService from '../../@types/StatusService.enum';
import db from '.';
import Users from './Users.model';
import UsersModel from './Users.model';
import Mechanical from './Mechanical.model';

export default class Services extends Model {
  public service_id?: number;
  public user_id!: number;
  public description!: string;
  public vehicle_model!: string;
  public vehicle_brand!: string;
  public vehicle_year!: number;
  public mechanical_id?: number;
  public status!: StatusService;
}

Services.init({
  service_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: UsersModel,
      key: 'user_id',
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicle_model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicle_brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vehicle_year: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
  mechanical_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    references: {
      model: Mechanical,
      key: 'mechanical_id',
    },
  },
  status: {
    type: DataTypes.ENUM('OPEN', 'PROGRESS', 'COMPLETED'),
    allowNull: false,
  },
}, {
  modelName: 'services',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Services.belongsTo(Users, { foreignKey: 'user_id' });

Services.belongsTo(Mechanical, { foreignKey: 'mechanical_id' });

Users.hasMany(Services, { foreignKey: 'user_id' });
