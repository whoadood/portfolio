import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginContext";
import InputField from "../components/InputField";
import "../styles/login.style.css";
import { useMessageContext } from "../context/MessageContext";

export default function Login() {
  const { setUser } = useLoginContext();
  const { handleMessage, handleError } = useMessageContext();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        handleError("please fill in all fields");
        return;
      }
      const response = await fetch("https://gsdevportfolio.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        handleMessage(data.message);
        navigate("/admin");
      } else {
        handleError(data.message);
        localStorage.removeItem("token");
      }
    } catch (err) {
      localStorage.removeItem("token");
      // console.log(err);
    }
  };

  const handleGuest = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://gsdevportfolio.herokuapp.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "guest",
          password: "guest",
        }),
      });
      const data = await response.json();

      if (data.success) {
        handleMessage(data.message);
        localStorage.setItem("token", data.token);
        setUser(data.token);
        navigate("/admin");
      }
    } catch (err) {
      localStorage.removeItem("token");
      // console.log(err);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <h2>Login as a Guest, have a look around</h2>
        <InputField name={"email"} value={email} onChange={handleChange} />
        <InputField
          name={"password"}
          value={password}
          isPassword={true}
          onChange={handleChange}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleGuest}>Login as Guest</button>
      </div>
    </div>
  );
}
