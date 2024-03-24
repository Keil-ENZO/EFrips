// app.js
const express = require("express");
const usersRouter = require("./routes/findUser");
const inscription = require("./routes/inscription");
const connexion = require("./routes/connexion");
const blog = require("./routes/findBlog");

const app = express();
const port = 3000;

app.use("/users", usersRouter);
app.use("/inscription", inscription);
app.use("/connexion", connexion);
app.use("/blogs", blog);

app.use("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
