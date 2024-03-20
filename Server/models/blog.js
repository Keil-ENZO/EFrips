const { DataTypes } = require("sequelize");
const sequelize = require("../db/connectDB");

const Blog = sequelize.define("blogs", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
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

module.exports = Blog;
