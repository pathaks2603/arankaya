import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/AranyakaHome.css";
import backgroundImage from "../assets/Main.jpg";
import yogaImg from "../assets/yoga.JPG";
import sun from "../assets/sunset.jpeg";
import Footer from "../pages/FooterHomepage";
import { Link } from "react-router-dom";

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
          <h2 className="mb-3">
            A return to the roots. A pause for the soul.{" "}
          </h2>
        </div>

        {/* About & Vision overlay on image */}
        <section className="about-vision-overlay container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="box light-box h-100 p-4">
                <h2 className="mb-3">About Us</h2>
                <p className="arayan-homepage">
                  Aranyaka is a conscious farmstay rooted in simplicity,
                  sustainability, and soulful living. Located in the heart of
                  Ranipokhri and surrounded by 36 acres of mango and litchi
                  orchards, we offer more than a place to stay—we offer a way to
                  live. Inspired by the principles of permaculture and food
                  forests, Aranyaka was created as a space where people can
                  pause, reconnect, and contribute. Whether you’re here for a
                  few days or a few weeks, your time is shaped by intentional
                  routines—wholesome food, nature-based living, community seva,
                  and creative stillness. We welcome travelers, seekers, and
                  storytellers into a warm, inclusive space where personal
                  well-being and ecological harmony walk hand-in-hand. Aranyaka
                  is for those who want to slow down with purpose, live gently,
                  and become part of something meaningful.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="box light-box h-100 p-4">
                <h2 className="mb-3">Vision – A Life in Balance</h2>
                <p className="arayan-homepage"> 
                  At Aranyaka, we envision a life where the mind, body, and soul
                  move in harmony with nature. Each day begins with a sacred
                  Havan, anchoring us in presence and gratitude. Guests
                  contribute their skills and spirit through seva—gardening,
                  art, or mindful creation—while savoring farm-to-table meals
                  born from the land. Through yoga, meditation, games,
                  stillness, and shared stories, we create space for both inner
                  reflection and joyful community. There is room for silence and
                  celebration, solitude and connection. As the sun sets, we
                  gently close the day with Yog Nidra, returning to ourselves
                  with softness and intention. Our vision is simple yet
                  profound: To create a space where like-minded souls live
                  consciously, move gently, give freely, and leave fuller than
                  they arrived—rested, rooted, and reconnected.
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

   
      <Footer />
    </div>
  );
}
