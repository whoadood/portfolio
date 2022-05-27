import { Link } from "react-router-dom";
import Message from "../components/Message";
import Navbar from "../components/Navbar";
import { useMessageContext } from "../context/MessageContext";

export default function Header({ children }) {
  const { message } = useMessageContext();

  return (
    <>
      <header>
        <div>
          <Link to="/">
            <h2>GS Dev</h2>
            <span>Gerard Strecker</span>
          </Link>
        </div>
        <Navbar />
      </header>
      {message.status && <Message />}
      {children}
    </>
  );
}
