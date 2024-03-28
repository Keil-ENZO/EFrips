const express = require("express");

// Auth
const inscription = require("./routes/auth/inscription");
const connexion = require("./routes/auth/connexion");

//Users
const usersRouter = require("./routes/userController/findUser");
const userById = require("./routes/userController/findUserById");
const removeUser = require("./routes/userController/removeUser");

// Adresses
const adresses = require("./routes/adresseController/findAdresses");

// Articles
const articles = require("./routes/articlesController/findArticles");

// Blogs
const blog = require("./routes/blogsController/findBlog");
const addBlog = require("./routes/blogsController/addBlogs");
const removeBlog = require("./routes/blogsController/removeBlog");
const findByIdBlog = require("./routes/blogsController/findByIdBlog");
const updatedBlog = require("./routes/blogsController/updateBlog");

// Categories
const categories = require("./routes/categoriesController/findCategories");
const findByIdCategories = require("./routes/categoriesController/findByIdCategories");
const addCategories = require("./routes/categoriesController/addCategories");
const removeCategories = require("./routes/categoriesController/removeCategories");
const updatedCategories = require("./routes/categoriesController/updateCategories");

// Upload image
const uploadImg = require("./routes/uploadImg");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint Auth
app.use("/inscription", inscription);
app.use("/connexion", connexion);

// Endpoint Upload image
app.use("/uploadImg", uploadImg);
app.use("/images", express.static("images"));

// Endpoint Users
app.use("/users", usersRouter);
app.use("/findByIdUser", userById);
app.use("/removeUser", removeUser);

// Endpoint Adresses
app.use("/adresses", adresses);

// Endpoint Articles
app.use("/articles", articles);

// Endpoint Categories
app.use("/categories", categories);
app.use("/findByIdCategories", findByIdCategories);
app.use("/addCategories", addCategories);
app.use("/removeCategories", removeCategories);
app.use("/updateCategories", updatedCategories);

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
