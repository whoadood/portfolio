const express = require("express");
const router = express.Router();
const {
  getProjects,
  postProject,
  deleteProject,
} = require("../controller/projectController");
// const upload = require("../middleware/multer");
const isLoggedIn = require("../middleware/isLoggedin");
const authCheck = require("../middleware/authCheck");
const adminCheck = require("../middleware/adminCheck");
const fileUpload = require("express-fileupload");

router.get("/", getProjects);

router.post(
  "/create",
  authCheck,
  isLoggedIn,
  adminCheck,
  fileUpload({ useTempFiles: true }),
  postProject
);

router.delete("/delete", authCheck, isLoggedIn, adminCheck, deleteProject);

module.exports = router;
