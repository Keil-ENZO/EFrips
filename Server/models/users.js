const { DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");
const jwt = require("jsonwebtoken");

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "user",
  },
  panier: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Définition de la méthode generateAuthToken
Users.generateAuthToken = function () {
  const token = jwt.sign({ id: this.id }, "your-secret-key");
  return token;
};

module.exports = Users;
