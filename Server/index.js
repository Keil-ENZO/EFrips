// app.js
const express = require("express");
const usersRouter = require("./routes/findUser");

const app = express();
const port = 3000;

// Monter le routeur des utilisateurs sur l'URL '/users'
app.use("/users", usersRouter);

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
