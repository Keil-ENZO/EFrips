const express = require("express");

const usersRouter = require("./routes/userController/findUser");
const inscription = require("./routes/auth/inscription");
const connexion = require("./routes/auth/connexion");
const blog = require("./routes/blogsController/findBlog");
const addBlog = require("./routes/blogsController/addBlogs");
const adresses = require("./routes/adresseController/findAdresses");
const articles = require("./routes/articlesController/findArticles");
const categories = require("./routes/categoriesController/findCategories");
const removeBlog = require("./routes/blogsController/removeBlog");
const findByIdBlog = require("./routes/blogsController/findByIdBlog");
const updatedBlog = require("./routes/blogsController/updateBlog");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint Auth
app.use("/inscription", inscription);
app.use("/connexion", connexion);

// Endpoint Users
app.use("/users", usersRouter);

// Endpoint Adresses
app.use("/adresses", adresses);

// Endpoint Articles
app.use("/articles", articles);

// Endpoint Categories
app.use("/categories", categories);

// Endpoint Blogs
app.use("/blogs", blog);
app.use("/addBlogs", addBlog);
app.use("/removeBlog", removeBlog);
app.use("/findByIdBlog", findByIdBlog);
app.use("/updateBlog", updatedBlog);

app.use("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
