import Demo from "../components/Demo";
import "../styles/projects.style.css";
import { useState, useEffect } from "react";
import { useMessageContext } from "../context/MessageContext";

import axios from "axios";

export default function Projects() {
  const { handleMessage, handleError } = useMessageContext();

  const [demoProjects, setDemoProjects] = useState([]);

  const deleteProject = (proj) => {
    setDemoProjects((prev) => [...prev.filter((p) => p._id !== proj._id)]);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("https://gsdevportfolio.herokuapp.com/api/projects");
        if (data.success) {
          handleMessage("Hello, my friend. Stay awhile and listen...");
          setDemoProjects((prev) => [...data.projects]);
        }
      } catch (err) {
        handleError("no projects yet, get to work!");
        console.log(err);
      }
    })();
  }, []);

  return (
    <section className="projects-container">
      <ul className="project-demo-container">
        {demoProjects.length > 0 ? (
          demoProjects.map((proj) => (
            <Demo key={proj._id} proj={proj} updateProjects={deleteProject} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </section>
  );
}
