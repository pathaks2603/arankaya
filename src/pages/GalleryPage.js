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
import badminton from "../assets/gallery/badminton.JPG";
import aamtree from "../assets/gallery/aamtree.JPG";
import badminton3 from "../assets/gallery/badminton3.JPG";
import carromatterrace from "../assets/gallery/carromatterrace.JPG";
import chitchat from "../assets/gallery/chitchat.JPG";
import chitchatoutside from "../assets/gallery/chitchatoutside.JPG";
import commanareapooltable from "../assets/gallery/commanareapooltable.jpg";
import TV from "../assets/gallery/commanareaTV.jpg";
import common1 from "../assets/gallery/commonarea.jpg";
import common2 from "../assets/gallery/commonarea2.jpg";
import commonsitting from "../assets/gallery/commonareasitting.jpg";
import cottageoutside from "../assets/gallery/cottageoutside.JPG";
import diningarea from "../assets/gallery/diningarea.jpg";
import farmview from "../assets/gallery/farmview.jpg";
import farm1 from "../assets/gallery/farmview2.jpg";
import farm2 from "../assets/gallery/farmview4.jpg";
import hall from "../assets/gallery/hallforharita2.jpg";
import hall1 from "../assets/gallery/hallforharitanivas.jpg";
import hall2 from "../assets/gallery/hallforsamatvanight.jpg";
import hall3 from "../assets/gallery/hallforsamatvanivas.jpg";
import hall4 from "../assets/gallery/hallforsamatvanivas2.jpg";
import hall5 from "../assets/gallery/hallwaytoporch.jpg";
import hall6 from "../assets/gallery/hallwaytoporch2.jpg";
import hall7 from "../assets/gallery/hallwaytoporch3.jpg";
import hall8 from "../assets/gallery/houseview.jpg";
import hall9 from "../assets/gallery/houseviewgarden.jpg";
import hall10 from "../assets/gallery/pickleball.JPG";
import hall11 from "../assets/gallery/pickleball2.JPG";
import hall12 from "../assets/gallery/porchback.JPG";
import hall13 from "../assets/gallery/relaxlady.JPG";
import hall14 from "../assets/gallery/sunrise.jpg";
import hall15 from "../assets/gallery/swimmingpoolaerialview.jpg";
import hall16 from "../assets/gallery/teatime.JPG";
import hall17 from "../assets/gallery/teatime2.JPG";
import hall18 from "../assets/gallery/veggies.jpg";
import hall19 from "../assets/gallery/yogalady.JPG";

const images = [
  aam3,
  cottageoutside,
  hall13,
  aam14,
  farm2,
  hall4,
  aam19,
  hall10,
  carromatterrace,
  aam8,
  hall1,
  aam10,
  common1,
  aam6,
  hall5,
  chitchat,
  aam1,

  aam16,
  diningarea,
  aam4,
  hall2,
  aam12,
  farmview,
  aam7,
  hall12,
  aam20,
  harita1,
  hall3,
  aam18,
  hall9,
  aam2,
  badminton,
  aam11,
  hall6,
  aam5,
  commonsitting,
  aam13,
  hall15,
  aam17,
  hall8,
  common2,
  hall16,
  aam15,
  commanareapooltable,
  hall11,
  aam9,
  harita3,
  hall7,
  aam13,
  harita2,
  aam17,
  hall18,
  aam5,
  hall14,
  aam7,
  hall17,
  aam4,
  aam19,
  harita4,
  aam8,
  harita5,
  aam12,
  samatva1,
  samatva2,
  samatva3,
  sattva1,
  chaitanya1,
  hall19,
  chaitanya2,
  chitchatoutside,
  farm1,
  chaitanya3,
  mridang1,
  mridang2,
  badminton3,
  aamtree,
  TV,
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
          backgroundImage: `url(${hall9})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "60vh",
        }}
      >
        <div
          className="display-background"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <div className="gallery-page container py-5">
            <h1 className="text-center mb-4 display-5 fw-bold">
              Gallery – Moments at Aranyaka
            </h1>
            <p className="text-center mb-5 lead" style={{ color: "#f8f4ec" }}>
              Discover glimpses of life at Aranyaka — from serene sunrises to
              joyful gatherings in nature’s embrace.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="masonry-gallery">
          {images.map((img, index) => (
            <div className="masonry-item" key={index}>
              <img
                src={img}
                alt={`Aranyaka ${index + 1}`}
                className="gallery-img"
                onClick={() => handleShow(index)}
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
