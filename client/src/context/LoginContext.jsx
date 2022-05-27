import { createContext, useState, useContext } from "react";

export const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token);

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
