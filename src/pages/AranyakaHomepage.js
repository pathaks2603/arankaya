import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/AranyakaHome.css";
import img1 from "../assets/retreat/yoga/yogameditation2.jpg";
import Footer from "../pages/FooterHomepage";
import { Link } from "react-router-dom";
import weightImg from "../assets/retreat/weight/weightloss2.jpg";
import { useEffect, useState } from "react";
import TestimonialsSection from "./TestimonialsSection";
import outside1 from "../assets/back/bahr.jpg";
import outside3 from "../assets/back/outside1.jpeg";
import outside4 from "../assets/back/outside2.JPG";
import outside5 from "../assets/back/outside3.JPG";
import outside6 from "../assets/back/swim.jpg";
import hall9 from "../assets/gallery/houseviewgarden.jpg";

import * as bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
window.bootstrap = bootstrap;

const backgroundImages = [
  outside1,
  hall9,
  outside3,
  outside4,
  outside5,
  outside6,
];

export default function AranyakaHomepage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});
  const [isFading, setIsFading] = useState(false);

  // ✅ preload images once on mount
  useEffect(() => {
    let isMounted = true;
    let loaded = {};

    Promise.all(
      backgroundImages.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              loaded[src] = true;
              resolve();
            };
            img.onerror = resolve; // handle error but resolve
          })
      )
    ).then(() => {
      if (isMounted) setLoadedImages(loaded);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // ✅ background image fade timer
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        setIsFading(false);
      }, 1000); // fade duration
    }, 5000); // every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="luxury-theme">
      <section className="hero-section text-white smooth-hero">
        {/* Hero Background */}
        <div
          className={`hero-bg ${isFading ? "fading" : ""}`}
          style={{
            backgroundImage: loadedImages[backgroundImages[currentImageIndex]]
              ? `url(${backgroundImages[currentImageIndex]})`
              : "none",
          }}
        ></div>

        <div className="overlay d-flex flex-column justify-content-center align-items-center back-display">
          <h1 className="display-3">
            LIVE THE ARANYAKA WAY
            <h2 className="mb-3">
              A return to the roots. A pause for the soul.
            </h2>
          </h1>
        </div>

        {/* About & Vision */}
        <section className="about-vision-overlay container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="box light-box h-100">
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
              <div className="box light-box h-100">
                <h2 className="mb-3">Vision – A Life in Balance</h2>
                <p className="arayan-homepage">
                  At Aranyaka, we envision a life where the mind, body, and soul
                  move in harmony with nature. Each day begins with a sacred
                  Havan, anchoring us in presence and gratitude. Guests
                  contribute their skills and spirit through seva—gardening,
                  art, or mindful creation—while savoring farm-to-table meals
                  born from the land. Through yoga, meditation, games, stillness
                  and shared stories, we create space for both inner reflection
                  and joyful community. There is room for silence and
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
          <h2 className="mb-5 exp">Experience</h2>
          <div className="row">
            <div className="col-md-4">
              <Link to="/yoga" className="experience-link">
                <div className="experience-card">
                  <img
                    src={img1}
                    alt="Yoga"
                    className="experience-img img-fluid rounded shadow mb-3"
                  />
                  <div className="experience-overlay">
                    <h5>Yoga</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/food" className="experience-link">
                <div className="experience-card">
                  <img
                    src={weightImg}
                    alt="Food"
                    className="experience-img img-fluid rounded shadow mb-3"
                  />
                  <div className="experience-overlay">
                    <h5>Food</h5>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link to="/stay" className="experience-link">
                <div className="experience-card">
                  <img
                    src="https://aranyakafarmstay.in/assets/commonarea.jpg"
                    alt="Stay"
                    className="experience-img img-fluid rounded shadow mb-3"
                  />
                  <div className="experience-overlay">
                    <h5>Stay</h5>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <Footer />
    </div>
  );
}
