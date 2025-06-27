import "../pages/StayPage.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
// Image Imports - Replace with actual files
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

const stayData = [
  {
    name: "Harita Nivas – The Luxury Suite",
    images: [harita1, harita2, harita3],
    description:
      "Our most spacious and elegant suite, Harita Nivas offers a blend of rustic charm and refined comfort. Adorned with natural textures, soft lighting, and a view that opens up to the orchard, it is perfect for those seeking tranquility with a touch of luxury.",
    features: [
      "King-sized bed",
      "Private sitting area",
      "En-suite bathroom with earthy finishes",
      "Large windows with garden/orchard views",
      "Thoughtfully curated herbal amenities",
    ],
  },
  {
    name: "Samatva Nivas – Twin Bed Room",
    images: [samatva1, samatva2, samatva3],
    description:
      "This twin-bed accommodation is designed for friends, siblings, or fellow travelers who value simplicity and serenity. It reflects balance in design and energy, making it ideal for those seeking quietude and connection.",
    features: [
      "Two comfortable single beds",
      "En-suite bathroom",
      "Peaceful garden and cottage view",
      "Minimal, natural décor for clarity and calm",
    ],
  },
  {
    name: "Sattva Nivas – The Deluxe Room",
    images: [sattva1, sattva2],
    description:
      "A serene hideaway with soothing earth-toned interiors, Sattva Nivas is our deluxe room designed for deep rest and rejuvenation. Overlooking the tranquil spa and the glistening swimming pool, this space invites you to unwind in stillness and reconnect with yourself.",
    features: [
      "Cozy double bed with organic linens",
      "Spacious en-suite bathroom with natural stone finishes",
      "Warm, earthy aesthetics with handcrafted accents",
      "View of the spa and pool — perfect for sunrise reflections or starry nights",
    ],
  },
  {
    name: "Chaitanya Nivas – Garden View Room",
    images: [chaitanya1, chaitanya2],
    description:
      "Bathed in natural light and opening to views of lush greenery, Chaitanya Nivas is a serene space that inspires reflection and quiet joy. A thoughtfully designed room with a king-sized bed and a beautiful aesthetic window framing the garden outside.",
    features: [
      "King-sized bed with soft, breathable linens",
      "Elegant window with garden views — ideal for morning tea or journaling",
      "Calming interiors with handcrafted details",
    ],
  },
  {
    name: "Aamram Kutir – Mango Orchard Suite",
    images: [aamram1, aamram2],
    description:
      "Overlooking the lush mango orchard, Aamram Kutir is a spacious suite ideal for families or those who enjoy extra room to stretch, breathe, and settle in. With its generous layout and tranquil views, it brings the feeling of a home tucked within nature.",
    features: [
      "King-sized bed + sofa-cum-bed (ideal for extra guest or child)",
      "Two full bathrooms for added convenience",
      "Large windows facing the mango orchard",
      "Rustic textures and quiet luxury",
    ],
  },
  {
    name: "Panchbhooti Kutir – Sky & Earth Suite",
    images: [panchbhooti1, panchbhooti2],
    description:
      "This thoughtfully designed cottage offers both skyward inspiration and grounding earth energy. With views of the mango orchard and an open sky window that invites starlight in, Panchbhooti Kutir balances beauty, comfort, and elemental harmony.",
    features: [
      "Double bed with orchard and sky views",
      "Wooden flooring for a natural, warm touch",
      "Private sitting area for reading or reflection",
      "Two bathrooms for ease",
    ],
  },
  {
    name: "Mridang Kutir – The Quiet Retreat",
    images: [mridang1, mridang2],
    description:
      "Mridang Kutir is our coziest cottage — simple, soulful, and just right for solo travelers or couples looking for a peaceful nook to rest and reconnect. With its earthy textures and soft light, it feels like a quiet rhythm in the forest.",
    features: [
      "Comfortable double bed",
      "Intimate sitting area",
      "Compact yet well-appointed interiors",
    ],
  },
];

const StayPage = () => {
  return (
    <div className="stay-page luxury-theme">
      <section className="stay-hero text-center text-white py-5">
        <h1 className="display-4 fw-bold">Stay at Aranyaka</h1>
        <p className="lead px-3">
          Your room is more than a place to sleep — it is a sanctuary to pause,
          breathe, and live in harmony with nature.
        </p>
      </section>

      <section className="stay-gallery container py-5">
        {stayData.map((room, index) => (
          <div
            className={`row room-section mb-5 align-items-center ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="col-md-6">
              <RoomImageSlider images={room.images} />
            </div>
            <div className="col-md-6">
              <h2 className="elegant-heading">{room.name}</h2>
              <p className="luxury-paragraph">{room.description}</p>
              <ul className="luxury-list">
                {room.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        <div className="common-includes mt-5 pt-4 border-top">
          <h5 className="elegant-heading mb-3">All Rooms Include:</h5>
          <ul className="luxury-list">
            <li>Natural cotton linens and handwoven throws</li>
            <li>Ayurvedic toiletries</li>
            <li>Access to spa, swimming pool, dining, orchard & food forest</li>
            <li>Wi-Fi in common areas (to encourage digital detox)</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

const RoomImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="room-slider">
        <img
          src={images[index]}
          alt="room"
          className="img-fluid rounded shadow"
          onClick={() => setShowModal(true)}
          style={{ cursor: "pointer", maxHeight: "300px", objectFit: "cover" }}
        />
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        className="room-image-modal"
      >
        <Modal.Body className="p-0">
          <img
            src={images[index]}
            alt="room-large"
            className="w-100"
            style={{ borderRadius: "10px" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StayPage;