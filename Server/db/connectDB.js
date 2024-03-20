const path = require("path");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");

// Charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

function connectToDatabase() {
  return new Promise((resolve, reject) => {
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connexion à la base de données réussie !");
        resolve();
      })
      .catch((err) => {
        console.error(
          "Erreur de connexion à la base de données :",
          err.message
        );
        reject(err);
      });
  });
}

module.exports = sequelize;
