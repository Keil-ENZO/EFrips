const express = require("express");
const bcrypt = require("bcrypt");
const cookie = require("cookie");
const Users = require("../../models/users");

const router = express.Router();

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { prenom, nom, email, password } = req.body;

    if (!prenom || !nom || !email || !password) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs." });
    }

    const checkUtilisateurs = await Users.findOne({
      where: {
        email,
      },
    });

    if (checkUtilisateurs) {
      return res.status(400).json({ message: "Cet email est déjà utilisé." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUtilisateur = await Users.create({
      prenom,
      nom,
      email,
      password: hashedPassword,
      role: "user",
      panier: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const token = newUtilisateur.generateAuthToken();

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 3600,
        path: "/",
      })
    );

    res.json({
      message: "Utilisateur créé avec succès.",
      user: newUtilisateur,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});

module.exports = router;
