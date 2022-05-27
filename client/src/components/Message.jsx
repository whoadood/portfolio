import { useMessageContext } from "../context/MessageContext";

export default function Message() {
  const { message } = useMessageContext();

  // console.log("mes", message);

  return (
    <div className={`message-container ${message.err ? "error" : null}`}>
      {message.message}
    </div>
  );
}
