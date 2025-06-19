
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        position: "fixed", 
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1, 
        backgroundColor: "rgba(28, 29, 28, 0.5)", 
        height : "12%"
      }}
    >
      <div className="container">
        <span className="navbar-brand">Aranyaka Life</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link nav-text" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/yoga">
                Yoga
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/food">
                Food
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link nav-text" to="/stay">
                Stay
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
