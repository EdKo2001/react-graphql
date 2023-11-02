import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import CompanyDetail from "./CompanyDetail";
import LoginForm from "./LoginForm";
import JobBoard from "./JobBoard";
import JobDetail from "./JobDetail";
import JobForm from "./JobForm";
import NavBar from "./NavBar";

import { isLoggedIn, logout } from "./auth";

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
    <div>
      <NavBar loggedIn={loggedIn} onLogout={handleLogout} />
      <section className="section">
        <div className="container">
          <Routes>
            <Route exact path="/" element={<JobBoard />} />
            <Route path="/companies/:companyId" element={<CompanyDetail />} />
            <Route exact path="/jobs/new" element={<JobForm />} />
            <Route path="/jobs/:jobId" element={<JobDetail />} />
            <Route
              exact
              path="/login"
              element={<LoginForm onLogin={handleLogin} />}
            />
          </Routes>
        </div>
      </section>
    </div>
  );
};

export default App;
