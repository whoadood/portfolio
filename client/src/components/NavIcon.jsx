import { Link } from "react-router-dom";

export default function NavIcon({ title, link, nav, icon }) {
  return (
    <li className="nav-icon">
      {nav ? (
        <a href={link} target={`${nav ? "_target" : ""}`}>
          {icon}
        </a>
      ) : (
        <Link to={link}>{icon}</Link>
      )}
    </li>
  );
}
