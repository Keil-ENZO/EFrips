const { DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");

const Articles = sequelize.define("articles", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prix: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tags: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: [],
  },
  img: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
});

module.exports = Articles;
