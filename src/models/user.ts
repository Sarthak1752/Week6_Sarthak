import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';

class User extends Model {
  public id!: string;
  public username!: string;
  public password!: string;
  public email!: string;
  public role!: string;
  public gocardlessCustomerId?: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
    },
    gocardlessCustomerId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
  }
);

export default User;
