import { DataTypes, Model } from 'sequelize';
import db from '.';
import Users from './Users.model';

export default class Services extends Model {
  public service_id!: number;
  public user_id!: number;
  public description!: string;
  public car_model!: string;
  public car_brand!: string;
  public car_year!: number;
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
  car_model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_year: {
    type: DataTypes.NUMBER,
    allowNull: true,
  },
}, {
  modelName: 'services',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

Services.belongsTo(Users, { foreignKey: 'user_id' });

Users.hasMany(Services, { foreignKey: 'user_id' });