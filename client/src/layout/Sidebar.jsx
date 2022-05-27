import NavIcon from "../components/NavIcon";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside>
      <ul className="sidebar-link-container">
        <NavIcon
          title="resume"
          link="/assets/Resume.pdf"
          nav={true}
          icon={<IoDocumentAttachSharp />}
        />
        <NavIcon
          title="github"
          link="https://www.github.com/whoadood"
          nav={true}
          icon={<BsGithub />}
        />
        <NavIcon
          title="linkedin"
          link="https://www.linkedin.com/in/gstrecker/"
          nav={true}
          icon={<BsLinkedin />}
        />
        {/* conditionally rendering this with user doesnt work? */}
        <NavIcon title="admin" link="/admin" icon={<FiSettings />} />
      </ul>
    </aside>
  );
}
