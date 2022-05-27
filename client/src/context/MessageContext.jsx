import { createContext, useState, useContext } from "react";

export const MessageContext = createContext();

export const useMessageContext = () => useContext(MessageContext);

export const MessageContextProvider = ({ children }) => {
  const [message, setMessage] = useState({
    status: false,
    err: false,
    message: "",
  });

  const handleMessage = (msg) => {
    setMessage({
      status: true,
      err: false,
      message: msg,
    });
    setTimeout(() => {
      setMessage({
        status: false,
        err: false,
        message: "",
      });
    }, 3000);
  };

  const handleError = (msg) => {
    setMessage({
      status: true,
      err: true,
      message: msg,
    });
    setTimeout(() => {
      setMessage({
        status: false,
        err: false,
        message: "",
      });
    }, 3000);
  };

  return (
    <MessageContext.Provider value={{ message, handleMessage, handleError }}>
      {children}
    </MessageContext.Provider>
  );
};
