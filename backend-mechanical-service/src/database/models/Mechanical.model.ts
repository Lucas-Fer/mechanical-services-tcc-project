import { DataTypes, Model } from 'sequelize';
import db from '.';

export default class Mechanical extends Model {
  public mechanical_id: number;
  public mechanical_name!: string;
  public mechanical_phone!: string;
  public mechanical_email!: string;
  public mechanical_password!: string;
  public autonomous!: boolean;
  public mechanical_workshop: string;
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
  mechanical_phone: {
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
  autonomous: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  mechanical_workshop: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  modelName: 'mechanicals',
  underscored: true,
  sequelize: db,
  timestamps: false,
});
