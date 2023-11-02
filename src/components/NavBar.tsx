import React from "react";
import { Link } from "react-router-dom";

interface NavBarProps {
  loggedIn: boolean;
  onLogout: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ loggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
        </Link>
        {loggedIn ? (
          <>
            <Link className="navbar-item" to="/jobs/new">
              Post Job
            </Link>
            <button type="button" className="navbar-item" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
