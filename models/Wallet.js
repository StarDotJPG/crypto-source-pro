const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wallet extends Model { }

Wallet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'wallet'
    }
);

module.exports = Wallet;