import { useLoginContext } from "../context/LoginContext";
import axios from "axios";
import { useMessageContext } from "../context/MessageContext";

export default function Demo({ proj, updateProjects }) {
  const { demo, demoType, title, desc, tech, github, url } = proj;
  const { user } = useLoginContext();
  const { handleMessage, handleError } = useMessageContext();

  const handleDelete = async (e) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
        data: { id: proj._id },
      };

      const { data } = await axios.delete("/api/projects/delete", config);

      if (data.success) {
        handleMessage(data.message);
        updateProjects(proj);
      }
    } catch (err) {
      // console.log(err);
      handleError("cant let you do that!");
    }
  };

  return (
    <li className="project-demo">
      {demoType.split("/")[1] === "mp4" ? (
        <video src={demo} controls muted />
      ) : (
        <img src={demo} alt="project demo" />
      )}

      <div className="project-info-container">
        <h3>{title}</h3>
        <p>{desc}</p>
        {user ? (
          <span onClick={handleDelete} className="delete">
            X
          </span>
        ) : null}
      </div>
      <div className="project-technology-container">
        <ul>
          {tech.map((lang) => (
            <li key={`${lang}`}>
              <img crossOrigin="anonymous" src={lang} alt="technology icon" />
            </li>
          ))}
        </ul>
      </div>
      <div className="project-navigation-container">
        <button onClick={() => window.open(github, "_blank")}>
          Learn More
        </button>
        {url && (
          <button onClick={() => window.open(url, "_blank")}>View Live</button>
        )}
      </div>
    </li>
  );
}
