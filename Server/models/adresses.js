const { DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");

const Adresses = sequelize.define("adresses", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  numero: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  rue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codePostal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pays: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Adresses;
