import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../pages/GalleryPage.css";
import backgroundImage from "../assets/sunset.jpeg";

// Image imports
import harita1 from "../assets/samtya.jpeg";
import harita2 from "../assets/Haritanivas.jpeg";
import harita3 from "../assets/chaityana.jpeg";
import samatva1 from "../assets/chaityana.jpeg";
import samatva2 from "../assets/samtya.jpeg";
import samatva3 from "../assets/Haritanivas.jpeg";
import sattva1 from "../assets/Haritanivas.jpeg";
import sattva2 from "../assets/chaityana.jpeg";
import chaitanya1 from "../assets/samtya.jpeg";
import chaitanya2 from "../assets/chaityana.jpeg";
import aamram1 from "../assets/samtya.jpeg";
import aamram2 from "../assets/chaityana.jpeg";
import panchbhooti1 from "../assets/chaityana.jpeg";
import panchbhooti2 from "../assets/samtya.jpeg";
import mridang1 from "../assets/chaityana.jpeg";
import mridang2 from "../assets/samtya.jpeg";

const images = [
  harita1,
  harita2,
  harita3,
  samatva1,
  samatva2,
  samatva3,
  sattva1,
  sattva2,
  chaitanya1,
  chaitanya2,
  aamram1,
  aamram2,
  panchbhooti1,
  panchbhooti2,
  mridang1,
  mridang2,
];

const GalleryPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleShow = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <section
        className="stay-hero text-center text-white py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "60vh",
        }}
      >
        <div className="display-background">
          <div className="gallery-page container py-5">
            <h1 className="text-center mb-4 display-5 fw-bold">
              Gallery – Moments at Aranyaka
            </h1>
            <p className="text-center mb-5 lead text-muted">
              Discover glimpses of life at Aranyaka — from serene sunrises to joyful
              gatherings in nature’s embrace.
            </p>
          </div>
        </div>
      </section>
     <section>
      <div className="row g-4 p-4">
        {images.map((img, index) => (
          <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
            <img
              src={img}
              alt={`Aranyaka ${index + 1}`}
              className="img-fluid rounded shadow-sm gallery-img"
              onClick={() => handleShow(index)}
              style={{ cursor: "pointer" }}
            />
          </div>
        ))}
      </div>
</section>
      {/* Modal with navigation */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        className="gallery-modal"
      >
        <Modal.Body className="p-0 position-relative d-flex justify-content-center align-items-center" style={{ width: "50vw", height: "50vh", margin: "auto" }}>
          <button
            className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
            style={{ zIndex: 1050 }}
            onClick={handlePrev}
          >
            ‹
          </button>
          <img
            src={images[currentIndex]}
            alt="Gallery view"
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
          <button
            className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
            style={{ zIndex: 1050 }}
            onClick={handleNext}
          >
            ›
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default GalleryPage;