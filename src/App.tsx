import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import CompanyDetail from "./components/CompanyDetail";
import LoginForm from "./components/LoginForm";
import JobBoard from "./components/JobBoard";
import JobDetail from "./components/JobDetail";
import JobForm from "./components/JobForm";
import NavBar from "./components/NavBar";

import { isLoggedIn, logout } from "./utils/auth";

const App = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const userIsLoggedIn = isLoggedIn();

  useEffect(() => {
    setLoggedIn(userIsLoggedIn);
  }, [userIsLoggedIn]);

  const handleLogin = () => {
    setLoggedIn(true);
    navigate("/");
  };

  const handleLogout = () => {
    logout();
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <section className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<JobBoard />} />
            <Route path="/companies/:companyId" element={<CompanyDetail />} />
            <Route path="/jobs/new" element={<JobForm />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
          </Routes>
        </div>
      </section>
    </>
  );
};

export default App;
