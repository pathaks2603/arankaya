import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "../pages/GalleryPage.css";
import backgroundImage from "../assets/sunset.jpeg";

import harita1 from "../assets/harita/Hari1.jpeg";
import harita2 from "../assets/harita/Hari2.jpeg";
import harita3 from "../assets/harita/Hari3.jpeg";
import harita4 from "../assets/harita/Hari4.jpeg";
import harita5 from "../assets/harita/Hari5.jpeg";
import samatva1 from "../assets/samatva/samatva1.jpeg";
import samatva2 from "../assets/samatva/samatva2.jpeg";
import samatva3 from "../assets/samatva/samatva3.jpeg";
import sattva1 from "../assets/sattva/sattva1.jpeg";
import chaitanya1 from "../assets/chaityana/chaityana1.jpeg";
import chaitanya2 from "../assets/chaityana/chaityana2.jpeg";
import chaitanya3 from "../assets/chaityana/chaityana3.jpeg";
import aam1 from "../assets/amaram/aam1.jpeg";
import aam2 from "../assets/amaram/aam2.jpeg";
import aam3 from "../assets/amaram/aam3.jpeg";
import aam4 from "../assets/amaram/aam4.jpeg";
import aam5 from "../assets/amaram/aam5.jpeg";
import aam6 from "../assets/amaram/aam6.jpeg";
import aam7 from "../assets/amaram/aam7.jpeg";
import aam8 from "../assets/amaram/aam8.jpeg";
import aam9 from "../assets/amaram/aam9.jpeg";
import aam10 from "../assets/amaram/aam10.jpeg";
import aam11 from "../assets/amaram/aam11.jpeg";
import aam12 from "../assets/amaram/aam12.jpeg";
import aam13 from "../assets/amaram/aam13.jpeg";
import aam14 from "../assets/amaram/aam14.jpeg";
import aam15 from "../assets/amaram/aam15.jpeg";
import aam16 from "../assets/amaram/aam16.jpeg";
import aam17 from "../assets/amaram/aam17.jpeg";
import aam18 from "../assets/amaram/aam18.jpeg";
import aam19 from "../assets/amaram/aam19.jpeg";
import aam20 from "../assets/amaram/aam20.jpeg";
import mridang1 from "../assets/chaityana.jpeg";
import mridang2 from "../assets/samtya.jpeg";

const images = [
  harita1,
  harita2,
  harita3,
  harita4,
  harita5,
  samatva1,
  samatva2,
  samatva3,
  sattva1,
  chaitanya1,
  chaitanya2,
  chaitanya3,
  mridang1,
  mridang2,
  aam1,
  aam2,
  aam3,
  aam4,
  aam5,
  aam6,
  aam7,
  aam8,
  aam9,
  aam10,
  aam11,
  aam12,
  aam13,
  aam14,
  aam15,
  aam16,
  aam17,
  aam18,
  aam19,
  aam20,
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
              Discover glimpses of life at Aranyaka — from serene sunrises to
              joyful gatherings in nature’s embrace.
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
        <Modal.Body
          className="p-0 position-relative d-flex justify-content-center align-items-center"
          style={{ width: "50vw", height: "50vh", margin: "auto" }}
        >
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
              width: "176%",
              height: "173%",
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
