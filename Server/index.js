// app.js
const express = require("express");
const usersRouter = require("./routes/findUser");
const inscription = require("./routes/inscription");
const connexion = require("./routes/connexion");
const blog = require("./routes/findBlog");
const addBlog = require("./routes/addBlogs");
const adresses = require("./routes/findAdresses");
const articles = require("./routes/findArticles");
const categories = require("./routes/findCategories");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/users", usersRouter);
app.use("/inscription", inscription);
app.use("/connexion", connexion);
app.use("/blogs", blog);
app.use("/addBlogs", addBlog);
app.use("/adresses", adresses);
app.use("/articles", articles);
app.use("/categories", categories);

app.use("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
