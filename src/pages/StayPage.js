import "../pages/StayPage.css";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import backgroundImage from "../assets/amaram_nivas.jpeg";

// Image Imports - Replace with actual files
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
import PackagesPage from "./PackagePage";

const stayData = [
  {
    name: "Harita Nivas – The Luxury Suite",
    images: [harita1, harita2, harita3,harita4,harita5],
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
    name: "Chaitanya Nivas – Garden View Room",
    images: [chaitanya1, chaitanya2,chaitanya3],
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
    images: [aam1,aam3,aam4,aam6,aam11,aam12,aam14,aam15,aam16,aam19,aam20],
    description:
      "Overlooking the lush mango orchard, Aamram Kutir is a spacious suite ideal for families or those who enjoy extra room to stretch, breathe, and settle in. With its generous layout and tranquil views, it brings the feeling of a home tucked within nature.",
    features: [
      "King-sized bed + sofa-cum-bed (ideal for extra guest or child)",
      "Two full bathrooms for added convenience",
      "Large windows facing the mango orchard",
      "Rustic textures and quiet luxury",
    ],
  }, {
    name: "Panchbhooti Kutir – Sky & Earth Suite",
    images: [aam2,aam5,aam9,aam7,aam8,aam10,aam13,aam17,aam18],
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
    name: "Sattva Nivas – The Deluxe Room",
    images: [sattva1],
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
      <section
        className="stay-hero text-center text-white py-5"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "60vh"
        }}
      >
        <div className="display-background">
        <h4 className="display-4 fw-bold py-5">
          Stay With Us – Where Comfort Meets Consciousness
        </h4>
        <p className="lead">
          Your room is more than a place to sleep — it is a sanctuary to pause,
          breathe, and live in harmony with nature.
        </p>
        </div>
      </section>

      <section className="container py-4 intro-stay">
          <h2 className="elegant-heading">Amenities</h2>
        <p className="lead text-muted">
          At Aranyaka, comfort isn’t just about luxury—it’s about feeling at
          home with nature, with others, and with yourself. Our 7 thoughtfully
          designed double-occupancy rooms offer warm, earthy aesthetics, restful
          energy, and just the right amount of modern ease.
          <br />
          Your Stay Includes:
          <ul>
            <li>A serene heated swimming pool for year-round relaxation</li>
            <li>
              Spa therapies and wellness treatments to restore balance and
              vitality
            </li>
            <li>
              Inviting spaces for indoor games, art, and creative expression
            </li>
            <li>A tranquil yoga and meditation studio to reconnect within</li>
            <li>Pickleball and badminton courts under the open sky</li>
            <li>A classic pool table for casual fun and connection</li>
            <li>A lush garden to read, reflect, or simply be</li>
          </ul>
          Whether you're unwinding solo or bonding with fellow seekers, every
          corner of Aranyaka is crafted to support a balanced, joyful, and
          conscious way of living.
        </p>
      </section>

      <section className="stay-gallery container">
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

      <PackagesPage />
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
          style={{ cursor: "pointer", maxHeight: "365px", objectFit: "cover" }}
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
