import { DataTypes, Model } from 'sequelize';
import sequelize from '../postgres/pgConfig';
import User from './user';
import Book from './book';

class Payment extends Model {
  public id!: string;
  public userId!: string;
  public bookId!: string;
  public amount!: number;
  public status!: string;
  public gocardlessPaymentId?: string; // New field
}

Payment.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      allowNull: false,
    },
    bookId: {
      type: DataTypes.UUID,
      references: {
        model: Book,
        key: 'id',
      },
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gocardlessPaymentId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Payment',
  }
);

export default Payment;
