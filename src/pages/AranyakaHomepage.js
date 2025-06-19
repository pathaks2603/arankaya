import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "../assets/Main.jpg";
import "../pages/AranyakaHome.css";
import yogaImg from "../assets/yoga.JPG";
import Footer from "../pages/FooterHomepage";
import sun from "../assets/sunset.jpeg";
import { Link } from "react-router-dom";

export default function AranyakaHomepage() {
  return (
    <div
      className=" text-dark background-image
    "
    >
      {/* Hero Section */}
      <section
        className="position-relative text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex flex-column justify-content-center align-items-center">
          <h1 className="display-3 fw-bold mb-3">LIVE THE ARANYAKA WAY</h1>
          <p className="fs-4 mb-4">
            Live Lightly. Grow Freely. Connect Deeply.
          </p>
          <button className="btn btn-success btn-lg">BOOK NOW</button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5">
        <div
          className="container conatiner-text
        "
        >
          <div className="row align-items-center">
            <div className="col-md-6  ">
              <h2 className="mb-4">
                About Us
                <span className="about-ara">
                  (Rooted in Nature, Growing in Harmony)
                </span>
              </h2>

              <p className="lead">
                Aranyaka is more than a destination—it's a lifestyle anchored in
                conscious living. Nestled within 36 acres of lush mango and
                litchi orchards, our farmstay in Ranipokhri offers a space for
                rest, reflection, and reconnection—with nature, with community,
                and with yourself. Our mission is to build a self-sustaining
                ecosystem following food forest principles, where people can
                live in rhythm with the land and themselves.
              </p>
            </div>
            <div className="col-md-6 image-section">
              <img
                src="https://aranyakafarmstay.in/assets/b7.jpg"
                alt="Outdoor table"
                className="img-fluid shadow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div
          className="container
        "
        >
          <div className="row align-items-center">
            <div className="col-md-6 image-section">
              <img
                src={sun}
                alt="Outdoor table"
                className="img-fluid  shadow vision"
              />
            </div>
            <div
              className="col-md-6  conatiner-text
            "
            >
              <h2 className="mb-4">
                Our Vision : A Living Forest, A Living Community
              </h2>

              <p className="lead">
                Aranyaka is rooted in the principles of the ancient Aaranyak
                texts, permaculture and food forest—where nature leads and we
                follow. Everything we do is designed to be regenerative, from
                our farming techniques to our daily routines. We compost,
                harvest rainwater, use solar energy, and grow food in cycles
                that mirror nature’s intelligence. Our long-term goal is to
                become fully self-sustaining—and we invite you to be a part of
                that vision. We believe in living simply, growing consciously,
                and giving generously. Our goal? To create a space where
                like-minded seekers, artists, healers, and curious wanderers
                come together to build a new way of being—balanced, sustainable,
                and soul-filled.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-5">
        <div
          className="container text-center conatiner-text
        "
        >
          <h2 className="mb-5">Experience</h2>
          <div className="row">
            <div className="col-md-4">
              <Link to="/yoga">
                <img
                  src={yogaImg}
                  alt="Yoga"
                  className="img-fluid rounded shadow mb-3"
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <h5>Yoga</h5>
              {/* <img
                src={yogaImg}
                alt="Yoga"
                className="img-fluid rounded shadow mb-3"
              />
              <h5>Yoga</h5> */}
            </div>
            <div className="col-md-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LnV7b_re3l2XpFEqWnM7AGVY-V0YsMZEGQ&s"
                alt="Food"
                className="img-fluid rounded shadow mb-3"
              />
              <h5>Food</h5>
            </div>
            <div className="col-md-4">
              <img
                src="https://aranyakafarmstay.in/assets/commonarea.jpg"
                alt="Stay"
                className="img-fluid rounded shadow mb-3"
              />
              <h5>Stay</h5>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Routine Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-5">Guest Routine</h2>
          <div className="row justify-content-center">
            {[
              { icon: "🧘", time: "6:30 AM", label: "YOGA" },
              { icon: "🍽️", time: "5:00 AM", label: "BREAKFAST" },
              { icon: "🌿", time: "1:00 PM", label: "SEVA" },
              { icon: "🛋️", time: "3:00 PM", label: "LEISURE" },
            ].map((item, index) => (
              <div className="col-6 col-md-3 mb-4" key={index}>
                <div className="fs-1 mb-2">{item.icon}</div>
                <p className="fw-bold mb-1">{item.time}</p>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <p className="fs-5 mt-4">Ready to energize the body and mind?</p>
          <button className="btn btn-success mt-3">BOOK NOW</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
