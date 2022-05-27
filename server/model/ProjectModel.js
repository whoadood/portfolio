const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ProjectSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  demo: {
    type: String,
    required: true,
  },
  demoType: {
    type: String,
    required: true,
  },
  tech: {
    type: Array,
    required: true,
  },
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
