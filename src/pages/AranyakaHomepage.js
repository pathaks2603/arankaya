import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/AranyakaHome.css";
import backgroundImage from "../assets/Main.jpg";
import yogaImg from "../assets/yoga.JPG";
import sun from "../assets/sunset.jpeg";
import Footer from "../pages/FooterHomepage";
import { Link } from "react-router-dom";
import PackagesPage from "./PackagePage";
import harita1 from "../assets/samtya.jpeg";
import harita2 from "../assets/Haritanivas.jpeg";
import harita3 from "../assets/chaityana.jpeg";
import bgImage from "../assets/amaram.jpeg";
import bgImag from "../assets/amaram_nivas.jpeg";

import React, { useEffect, useState } from "react";

const backgroundImages = [
  bgImage,
  harita1,
  harita2,
  harita3,
  backgroundImage,
  sun,
  bgImag,
];
const formBaseURL = "https://forms.gle/FxNNsBiPj9gNSfrF7";

export default function AranyakaHomepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="luxury-theme">
      {/* Hero Section */}
      <section
        className="hero-section text-white"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        }}
      >
        <div className="overlay d-flex flex-column justify-content-center align-items-center back-display">
          <h1 className="display-3">LIVE THE ARANYAKA WAY</h1>
          {/* <button className="btn btn-light mt-3">BOOK NOW</button> */}
          <button
            className="btn btn-light mt-3"
            onClick={() => {
              const url = `${formBaseURL}`;
              //   const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=aranyaka.108@gmail.com&su=Enquiry for ${pkg.nights} nights stay&body=Hi, I’m interested in the ${pkg.nights}-night package at Aranyaka. Please share more details.`;
              window.open(url, "_blank");
            }}
          >
            Book Now
          </button>
        </div>

        {/* About & Vision overlay on image */}
        <section className="about-vision-overlay container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="box light-box h-100 p-4">
                <h2 className="mb-3">About Us</h2>
                <p>
                  Aranyaka is more than a destination—it's a lifestyle anchored
                  in conscious living. Nestled within 36 acres of lush mango and
                  litchi orchards, our farmstay in Ranipokhri offers a space for
                  rest, reflection, and reconnection—with nature, with
                  community, and with yourself. Our mission is to build a
                  self-sustaining ecosystem following food forest principles,
                  where people can live in rhythm with the land and themselves.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box light-box h-100 p-4">
                <h2 className="mb-3">Our Vision</h2>
                <p>
                  Our philosophy is rooted in the principles of the ancient
                  Aaranyak texts, permaculture and food forest—where nature
                  leads and we follow. Everything we do is designed to be
                  regenerative, from our farming techniques to our daily
                  routines. We compost, harvest rainwater, use solar energy, and
                  grow food in cycles that mirror nature’s intelligence. Our
                  long-term goal is to become fully self-sustaining—and we
                  invite you to be a part of that vision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Experience Section */}
      <section className="experience-section py-5">
        <div className="container text-center">
          <h2 className="mb-5">Experience</h2>
          <div className="row">
            <div className="col-md-4">
              <Link to="/yoga" className="experience-link">
                <img
                  src={yogaImg}
                  alt="Yoga"
                  className="experience-img img-fluid rounded shadow mb-3"
                />
                <h5>Yoga</h5>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/food" className="experience-link">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6LnV7b_re3l2XpFEqWnM7AGVY-V0YsMZEGQ&s"
                  alt="Food"
                  className="experience-img img-fluid rounded shadow mb-3"
                />
                <h5>Food</h5>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/stay" className="experience-link">
                <img
                  src="https://aranyakafarmstay.in/assets/commonarea.jpg"
                  alt="Stay"
                  className="experience-img img-fluid rounded shadow mb-3"
                />
                <h5>Stay</h5>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PackagesPage />
      <Footer />
    </div>
  );
}
