const express = require("express");
const bcrypt = require("bcrypt");
const cookie = require("cookie"); // Ajoutez cette ligne pour importer la bibliothèque cookie
const connect = require("../db/connectDB");

const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const query = `SELECT * FROM users`;
    connect.query(query, async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      } else {
        const user = result.find((user) => user.email === req.body.email);
        if (user) {
          res.status(400).json({ error: "Cet email est déjà utilisé." });
        } else {
          if (
            !req.body.email ||
            !req.body.mdp ||
            !req.body.prenom ||
            !req.body.nom
          ) {
            return res
              .status(400)
              .json({ error: "Tous les champs sont requis." });
          }

          // Reste du code pour l'inscription
          const hash = await bcrypt.hash(req.body.mdp, 10);
          const insertQuery = `INSERT INTO users (prenom, nom, email, mdp) VALUES (?, ?, ?, ?)`;
          connect.query(insertQuery, [req.body.email, hash], (err, result) => {
            if (err) {
              console.error(err);
              return res.status(500).json({ error: err.message });
            }

            // Créez un cookie après une inscription réussie
            const userData = { email: req.body.email };
            const cookieOptions = {
              httpOnly: true, // Empêche l'accès au cookie via JavaScript
            };
            res.setHeader(
              "Set-Cookie",
              cookie.serialize(
                "userData",
                JSON.stringify(userData),
                cookieOptions
              )
            );

            res.json({ id: result.insertId });
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});

module.exports = router;
