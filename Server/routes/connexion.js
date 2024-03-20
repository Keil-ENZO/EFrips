const express = require("express");
const bcrypt = require("bcrypt");
const connect = require("../db/connectDB");

const router = express.Router(); // Assurez-vous que cette ligne est présente

router.post("/", async (req, res) => {
  try {
    const query = `SELECT * FROM users`;
    connect.query(query, async (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
      } else {
        const user = result.find((user) => user.email === req.body.email);

        if (!user) {
          res.status(400).json({ error: "Cet email n'existe pas." });
        } else {
          const validPassword = await bcrypt.compare(req.body.mdp, user.mdp);
          if (!validPassword) {
            res.status(400).json({ error: "Mot de passe incorrect." });
          } else {
            res.json({ message: "Connexion réussie." });
          }
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});

module.exports = router;
