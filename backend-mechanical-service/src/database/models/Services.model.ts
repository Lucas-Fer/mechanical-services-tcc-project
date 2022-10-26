import { DataTypes, Model } from 'sequelize';
import StatusService from '../../@types/StatusService.enum';
import db from '.';
import Users from './Users.model';

export default class Services extends Model {
  public service_id?: number;
  public user_id!: number;
  public description!: string;
  public vehicle_model!: string;
  public vehicle_brand!: string;
  public vehicle_year!: number;
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
  status: {
    type: DataTypes.ENUM('OPEN, CLOSED'),
    allowNull: false,
  },
}, {
  modelName: 'services',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Services.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(Services, { foreignKey: 'user_id' });