"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgres/pgConfig"));
const user_1 = __importDefault(require("./user"));
const book_1 = __importDefault(require("./book"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: user_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    bookId: {
        type: sequelize_1.DataTypes.UUID,
        references: {
            model: book_1.default,
            key: 'id',
        },
        allowNull: false,
    },
    amount: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gocardlessPaymentId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'Payment',
});
exports.default = Payment;
//# sourceMappingURL=payment.js.map