// dependecies
require("dotenv").config({ path: "./config/.env" });
const express = require("express");
// const multer = require("multer");

const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const path = require("path");

// modules
const connectDB = require("./config/database");
const projectRoutes = require("./router/projectRoutes");
const authRoutes = require("./router/userRoutes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");
// const adminCheck = require("./middleware/adminCheck");
// const authCheck = require("./middleware/authCheck");
// const isLoggedIn = require("./middleware/isLoggedin");

// app
const app = express();
const port = process.env.PORT || 2221;
connectDB();

// middleware dependencies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
// app.use(helmet());
app.use(
  cors({
    origin: "https://gsdevportfolio.herokuapp.com",
  })
);

// route middlware
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// serve react build
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`api listening\nport: ${port}`));
