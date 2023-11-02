import { Link } from "react-router-dom";

const NavBar = (props) => {
  const { loggedIn, onLogout } = props;

  if (loggedIn) {
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/jobs/new">
            Post Job
          </Link>
          <button type="button" className="navbar-item" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/login">
            Login
          </Link>
        </div>
      </nav>
    );
  }
};

export default NavBar;
