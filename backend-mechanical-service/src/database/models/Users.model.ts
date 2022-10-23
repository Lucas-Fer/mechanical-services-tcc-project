import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Users extends Model {
  public user_id!: number;
  public user_name!: string;
  public user_phone!: string;
  public user_email!: string;
  public user_password!: string;
}

Users.init({
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
  modelName: 'Users',
  underscored: true,
  sequelize: db,
  timestamps: false,
});


