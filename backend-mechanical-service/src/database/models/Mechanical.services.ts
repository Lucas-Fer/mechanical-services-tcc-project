import { DataTypes, Model } from 'sequelize';
import db from '.';
import Mechanical from './Mechanical.model';

export default class MechanicalServices extends Model {
  public user_id!: number;
  public user_name!: string;
  public user_phone!: string;
  public user_email!: string;
  public user_password!: string;
}

MechanicalServices.init({
  service_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mechanical_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status_service: {
    type: DataTypes.ENUM,
    allowNull: false,
  },
}, {
  modelName: 'mechanical_service',
  underscored: true,
  sequelize: db,
  timestamps: false,
});

MechanicalServices.belongsTo(Mechanical, { foreignKey: 'mechanical_id' });

Mechanical.hasMany(Mechanical, { foreignKey: 'mechanical_id' });
