import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Navbar.css";

const formBaseURL = "https://forms.gle/FxNNsBiPj9gNSfrF7";

const Navbar = () => {
  // Function to close navbar on click (mobile)
  const closeNavbar = () => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler && navbarToggler.classList.contains("show")) {
      navbarToggler.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        <button
          className="navbar-toggler d-lg-none order-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link
          className="navbar-brand mx-auto mx-lg-0 order-1 order-lg-0"
          to="/"
        >
          Aranyaka Farmstay
        </Link>

        <div className="order-2 ms-auto">
          <button
            onClick={() => window.open(formBaseURL, "_blank")}
            className="btn btn-outline-warning text-white fw-bold me-2"
          >
            Enquire Now
          </button>
        </div>

        <div
          className="collapse navbar-collapse justify-content-lg-end order-lg-1"
          id="navbarNav"
        >
          <ul className="navbar-nav text-end text-lg-start">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/yoga" onClick={closeNavbar}>
                Yoga/TTC
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/food" onClick={closeNavbar}>
                Food
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stay" onClick={closeNavbar}>
                Stay
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/retreat" onClick={closeNavbar}>
                Retreats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={closeNavbar}>
                Gallery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
