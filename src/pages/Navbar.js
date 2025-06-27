import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Navbar.css";

const formBaseURL = "https://forms.gle/FxNNsBiPj9gNSfrF7";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container-fluid">
        {/* Hamburger on small screens */}
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

        {/* Brand in center (mobile) or left (desktop) */}
        <Link
          className="navbar-brand mx-auto mx-lg-0 order-1 order-lg-0"
          to="/"
        >
          Aranyaka Life
        </Link>

        {/* Book Now button - Always right */}

        <div className="order-2 ms-auto">
          <button
            onClick={() => {
              const url = `${formBaseURL}`;
              //   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aranyaka.108@gmail.com&su=Enquiry for ${pkg.nights} nights stay&body=Hi, I’m interested in the ${pkg.nights}-night package at Aranyaka. Please share more details.`;
              window.open(url, "_blank");
            }}
            className="btn btn-outline-warning text-white fw-bold me-2"
          >
            Book Now
          </button>
          {/* <Link
            to="/packages"
            className="btn btn-outline-warning text-white fw-bold me-2"
          >
            Book Now
          </Link> */}
        </div>

        {/* Collapsible nav links */}
        <div
          className="collapse navbar-collapse justify-content-lg-end order-lg-1"
          id="navbarNav"
        >
          <ul className="navbar-nav text-end text-lg-start">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/yoga">
                Yoga
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/food">
                Food
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/stay">
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
