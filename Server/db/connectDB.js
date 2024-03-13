const { MongoClient } = require("mongodb");

// URL de connexion à votre base de données MongoDB
const uri =
  "mongodb://127.0.0.1:27017/project1?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5";

// Options de connexion
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Fonction pour établir la connexion à la base de données
async function connectDatabase() {
  try {
    // Connexion au client MongoDB
    const client = new MongoClient(uri, options);
    await client.connect();

    console.log("Connected to the database");

    // Retourne la base de données connectée
    return client.db();
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error; // Propage l'erreur pour être traitée par l'appelant
  }
}

// Exportez la fonction connectDatabase pour pouvoir l'utiliser dans d'autres fichiers
module.exports = { connectDatabase };
