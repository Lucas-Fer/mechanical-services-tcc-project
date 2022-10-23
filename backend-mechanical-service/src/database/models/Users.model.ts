import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class UsersModel extends Model {
  public user_id!: number;
  public user_name!: string;
  public user_phone!: string;
  public user_email!: string;
  public user_password!: string;
}

UsersModel.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'users',
  underscored: true,
  sequelize: db,
  timestamps: false,
});


