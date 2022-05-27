import "../styles/admin.style.css";
import { devicons } from "../utils/devicons";
import Checkbox from "../components/Checkbox";
import { useState } from "react";
import InputField from "../components/InputField";
import { AiFillFileAdd } from "react-icons/ai";
import { overrideEventDefaults } from "../utils/dragDropDefaults";
import { useMessageContext } from "../context/MessageContext";
import { fetchCreateProject } from "../utils/createProject";

export default function Admin() {
  // file state
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState(null);
  const { handleError, handleMessage } = useMessageContext();

  function handleDragAndDropFiles(event) {
    overrideEventDefaults(event);
    if (!event.dataTransfer) return;

    const fileType = event.dataTransfer.files[0].type
      .split("/")[0]
      .toLowerCase();

    if (fileType !== "image" && fileType !== "video") return;
    handleFiles(event.dataTransfer.files);
  }

  const handleFiles = (fileList) => {
    if (fileList) {
      let files = Array.from(fileList)[0];
      setFiles(files);
    }
  };

  // form state
  const initialForm = {
    title: "",
    desc: "",
    github: "",
    url: "",
  };
  const [form, setForm] = useState(initialForm);
  const { title, desc, github, url } = form;

  const initialIcons = Object.keys(devicons).map((icon) => ({
    name: icon,
    value: devicons[icon],
    checked: false,
  }));

  const [tech, setTech] = useState(initialIcons);
  // form state end

  // event handlers
  const handleChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleTech = (e) => {
    setTech((prev) => {
      const updated = prev.map((icon) => {
        if (icon.name === e.target.name) {
          return {
            ...icon,
            checked: !icon.checked,
          };
        } else {
          return icon;
        }
      });
      return updated;
    });
  };

  // submit logic
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const checknology = tech.filter((lan) => lan.checked);

      if (!title) {
        handleError("please enter a title");
        return;
      }
      if (!desc) {
        handleError("please enter a description");
        return;
      }
      if (!github) {
        handleError("please enter a github link");
        return;
      }
      if (!files) {
        handleError("please add a media file");
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("github", github);
      formData.append("url", url);
      formData.append("file", files);
      checknology.forEach((lang) => formData.append("language", lang.value));

      const { data } = await fetchCreateProject(formData);
      if (data.success) {
        handleMessage(data.message);
      }

      handleReset();
    } catch (err) {
      handleReset();
      handleError("it would be fun...");
      // console.log(err);
    }
  };

  // reset form logic
  const handleReset = () => {
    setFiles(null);
    setForm(initialForm);
    setTech(initialIcons);
  };
  // console.log(dragActive);

  return (
    <section className="admin-container">
      <div className="create-project-form-container">
        <form onSubmit={handleSubmit}>
          <InputField name="title" value={title} onChange={handleChange} />
          <label htmlFor="desc">
            Project Description
            <textarea
              rows={4}
              name="desc"
              value={desc}
              onChange={handleChange}
            />
          </label>
          <InputField name="github" value={github} onChange={handleChange} />
          <InputField name="url" value={url} onChange={handleChange} />

          {files !== null ? (
            <div className="upload">
              <span
                className="delete-file-button"
                onClick={(e) => {
                  setFiles(null);
                  setDragActive(false);
                }}
              >
                X
              </span>
              {files.type.split("/")[0].toLowerCase() !== "image" ? (
                <AiFillFileAdd />
              ) : (
                <img src={URL.createObjectURL(files)} alt="file preview" />
              )}
              <span>{files.name}</span>
              <span>{files.type}</span>
            </div>
          ) : (
            <div
              className={`file ${dragActive ? "active" : ""}`}
              onDrop={overrideEventDefaults}
              onDragEnter={(e) => {
                overrideEventDefaults(e);
                setDragActive(true);
              }}
              onDragLeave={(e) => {
                overrideEventDefaults(e);
              }}
              onDragOver={overrideEventDefaults}
            >
              <div
                className="media"
                onDrop={handleDragAndDropFiles}
                onDragEnter={overrideEventDefaults}
                onDragLeave={overrideEventDefaults}
                onDragOver={overrideEventDefaults}
              >
                <label className="info dragText">
                  Drag &amp; Drop Project Media
                </label>
              </div>
            </div>
          )}

          <div className="tech">
            {tech.map((lan) => (
              <Checkbox
                key={lan.name}
                name={lan.name}
                value={lan.value}
                checked={lan.checked}
                onChange={handleTech}
              />
            ))}
          </div>
          <button type="submit">Create Project</button>
        </form>
      </div>
    </section>
  );
}
