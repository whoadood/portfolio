const Project = require("../model/ProjectModel");
const { uploadFile } = require("../middleware/s3");
// @ /api/projects/
// get projects from database
const getProjects = async (req, res, next) => {
  try {
    const projects = await Project.find();

    if (!projects || projects.length <= 0) {
      res.status(400);
      throw new Error("No projects yet, get to work!");
    }

    res.status(200).json({
      success: true,
      message: "successfully fetched projects",
      projects,
    });
  } catch (err) {
    next(err);
  }
};

// @ /api/projects/create
// create new project in database
const postProject = async (req, res, next) => {
  try {
    const { title, desc, github, url, language } = req.body;
    const { file } = req.files;
    const techArr = Array.from(language);
    const fileType = file.mimetype.split("/")[0].toLowerCase();

    if (fileType !== "image" && fileType !== "video") {
      res.status(400);
      throw new Error("Sorry we do not accept that media type");
    }

    const dupe = await Project.findOne({ title, url });

    if (dupe) {
      res.status(400);
      return res.json({
        success: false,
        message: "project already exists, please check projects",
        project: dupe,
      });
    }

    const awsRes = await uploadFile(file);
    console.log("\nres from aws", awsRes);

    if (!awsRes) {
      res.status(400);
      throw new Error("problems with aws");
    }

    const project = await Project.create({
      title,
      desc,
      github,
      url,
      tech: techArr,
      demo: awsRes.Location,
      demoType: file.mimetype,
    });

    if (!project) {
      res.status(400);
      throw new Error("something went wrong");
    }

    res.status(200).json({
      success: true,
      message: "project successfully created",
      project,
    });
  } catch (err) {
    next(err);
  }
};

// @ api/projects/delete
// delete project by id
const deleteProject = async (req, res, next) => {
  const { id } = req.body;
  try {
    const deleted = await Project.findByIdAndDelete(id);

    if (!deleted) {
      res.status(400);
      return res.json({ success: false, message: "could not delete project" });
    }

    res.status(200).json({
      success: true,
      message: "successfully deleted project",
      project: deleted,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getProjects, postProject, deleteProject };
