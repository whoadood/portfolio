import NavIcon from "../components/NavIcon";
import { useLoginContext } from "../context/LoginContext";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useMessageContext } from "../context/MessageContext";

export default function Navbar() {
  const { user, setUser } = useLoginContext();
  const { handleMessage } = useMessageContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    handleMessage("user successfully logged out");
    navigate("/");
  };
  return (
    <nav>
      <ul className="icon-container">
        {user ? (
          <button className="nav-icon" onClick={handleLogout}>
            <FaUserMinus />
          </button>
        ) : (
          <NavIcon title="login" link="/login" icon={<FaUserPlus />} />
        )}
      </ul>
    </nav>
  );
}
