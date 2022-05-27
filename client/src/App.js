import "./styles/app.style.css";
import Header from "./layout/Header";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { LoginContextProvider } from "./context/LoginContext";
import TokenCheck from "./components/TokenCheck";
import AuthCheck from "./components/AuthCheck";
import { MessageContextProvider } from "./context/MessageContext";

function App() {
  return (
    <>
      <LoginContextProvider>
        <MessageContextProvider>
          <Router>
            <Header>
              <main>
                <Sidebar />
                <Routes>
                  <Route exact path="/" element={<Projects />} />
                  <Route exact element={<AuthCheck />}>
                    <Route exact path="/admin" element={<Admin />} />
                  </Route>
                  <Route exact element={<TokenCheck />}>
                    <Route exact path="/login" element={<Login />} />
                  </Route>
                </Routes>
              </main>
            </Header>
          </Router>
        </MessageContextProvider>
      </LoginContextProvider>
    </>
  );
}

export default App;
