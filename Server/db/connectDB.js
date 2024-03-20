const path = require("path"); // Ajout de la dépendance 'path'
const mysql = require("mysql2");
const dotenv = require("dotenv");

// Charger les variables d'environnement depuis le fichier .env
dotenv.config({ path: path.resolve(__dirname, "../.env") }); // Ajuster le chemin selon votre structure

// Connexion à la base de données
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Fonction pour se connecter à la base de données
function connectToDatabase() {
  return new Promise((resolve, reject) => {
    db.connect((err) => {
      if (err) {
        console.error(
          "Erreur de connexion à la base de données :",
          err.message
        );
        reject(err);
      } else {
        console.log("Connexion à la base de données réussie !");
        resolve();
      }
    });
  });
}

// Exporte la fonction de connexion à la base de données
module.exports = {
  connect: connectToDatabase,
  query: db.query.bind(db),
};
