import "../pages/StayPage.css";
import Carousel from "react-bootstrap/Carousel";
import backgroundImage from "../assets/amaram_nivas.jpeg";
import PackagesPage from "./PackagePage";

// Room images (replace with your actual imports)
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
import aam3 from "../assets/amaram/aam3.jpeg";
import aam4 from "../assets/amaram/aam4.jpeg";
import aam6 from "../assets/amaram/aam6.jpeg";
import aam11 from "../assets/amaram/aam11.jpeg";
import aam12 from "../assets/amaram/aam12.jpeg";
import aam14 from "../assets/amaram/aam14.jpeg";
import aam15 from "../assets/amaram/aam15.jpeg";
import aam16 from "../assets/amaram/aam16.jpeg";
import aam19 from "../assets/amaram/aam19.jpeg";
import aam20 from "../assets/amaram/aam20.jpeg";

import aam2 from "../assets/amaram/aam2.jpeg";
import aam5 from "../assets/amaram/aam5.jpeg";
import aam9 from "../assets/amaram/aam9.jpeg";
import aam7 from "../assets/amaram/aam7.jpeg";
import aam8 from "../assets/amaram/aam8.jpeg";
import aam10 from "../assets/amaram/aam10.jpeg";
import aam13 from "../assets/amaram/aam13.jpeg";
import aam17 from "../assets/amaram/aam17.jpeg";
import aam18 from "../assets/amaram/aam18.jpeg";

import mridang1 from "../assets/chaityana.jpeg";
import mridang2 from "../assets/samtya.jpeg";

// Room data
const stayData = [
  {
    name: "Harita Nivas – The Luxury Suite",
    images: [harita1, harita2, harita3, harita4, harita5],
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
      "Designed for friends or fellow travelers who value simplicity and serenity. It reflects balance in design and energy.",
    features: [
      "Two comfortable single beds",
      "En-suite bathroom",
      "Peaceful garden and cottage view",
      "Minimal, natural décor for clarity and calm",
    ],
  },
  {
    name: "Chaitanya Nivas – Garden View Room",
    images: [chaitanya1, chaitanya2, chaitanya3],
    description:
      "Bathed in natural light and opening to lush greenery, this serene space inspires reflection and quiet joy.",
    features: [
      "King-sized bed with soft linens",
      "Elegant window with garden views",
      "Calming interiors with handcrafted details",
    ],
  },
  {
    name: "Aamram Kutir – Mango Orchard Suite",
    images: [
      aam1,
      aam3,
      aam4,
      aam6,
      aam11,
      aam12,
      aam14,
      aam15,
      aam16,
      aam19,
      aam20,
    ],
    description:
      "Overlooking the lush mango orchard, perfect for families or those who enjoy extra space to stretch and breathe.",
    features: [
      "King-sized bed + sofa-cum-bed",
      "Two full bathrooms",
      "Large windows facing the orchard",
      "Rustic textures and quiet luxury",
    ],
  },
  {
    name: "Panchbhooti Kutir – Sky & Earth Suite",
    images: [aam2, aam5, aam9, aam7, aam8, aam10, aam13, aam17, aam18],
    description:
      "Offers both skyward inspiration and grounding earth energy with orchard views and open sky window.",
    features: [
      "Double bed with orchard and sky views",
      "Wooden flooring",
      "Private sitting area",
      "Two bathrooms",
    ],
  },
  {
    name: "Sattva Nivas – The Deluxe Room",
    images: [sattva1],
    description:
      "A serene hideaway designed for deep rest and rejuvenation overlooking the spa and swimming pool.",
    features: [
      "Cozy double bed with organic linens",
      "Spacious en-suite bathroom",
      "Warm, earthy aesthetics",
      "View of spa and pool",
    ],
  },
  {
    name: "Mridang Kutir – The Quiet Retreat",
    images: [mridang1, mridang2],
    description:
      "Our coziest cottage — simple, soulful, perfect for solo travelers or couples seeking peace.",
    features: [
      "Comfortable double bed",
      "Intimate sitting area",
      "Compact yet elegant interiors",
    ],
  },
];

const StayPage = () => {
  return (
    <div className="stay-page luxury-theme">
      <section
        className="stay-hero"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content text-center">
            <h1 className="hero-heading">
              Stay With Us – Where Comfort Meets Consciousness
            </h1>
            <p className="hero-subtext">
              Your room is more than a place to sleep — it is a sanctuary to
              pause, breathe, and live in harmony with nature.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-4 amenities-section">
        <h2 className="elegant-heading" style={{ color: "#bfa46f" }}>
          🌿 Amenities
        </h2>
        <p className="lead text-muted">
          At Aranyaka, comfort isn’t just about luxury—it’s about feeling at
          home with nature. Our rooms offer warm, earthy aesthetics and restful
          energy.
        </p>
        <div className="amenities-list">
          <div className="amenity-item">Heated swimming pool</div>
          <div className="amenity-item">
            Spa therapies & wellness treatments
          </div>
          <div className="amenity-item">
            Spaces for indoor games, art, creative expression
          </div>
          <div className="amenity-item">Yoga & meditation studio</div>
          <div className="amenity-item">Pickleball & badminton courts</div>
          <div className="amenity-item">Classic pool table</div>
          <div className="amenity-item">Peaceful gardens</div>
        </div>
      </section>

      <section className="stay-gallery container">
        {stayData.map((room, index) => (
          <div
            className={`row luxury-room mb-5 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
            key={index}
          >
            <div className="col-md-6">
              <div className="luxury-carousel-wrapper">
                <Carousel fade controls={false} interval={4000}>
                  {room.images.map((src, idx) => (
                    <Carousel.Item key={idx}>
                      <img
                        src={src}
                        alt={`slide-${idx}`}
                        className="d-block w-100 luxury-carousel-img"
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            </div>
            <div className="col-md-6">
              <div className="luxury-info-panel">
                <h3 className="luxury-room-title">{room.name}</h3>
                <p className="luxury-room-desc">{room.description}</p>
                <ul className="luxury-room-features">
                  {room.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}

        <div className="common-includes mt-5 pt-4 border-top">
          <h5 className="elegant-heading mb-3" style={{ color: "#bfa46f" }}>
            All Rooms Include:
          </h5>
          <ul className="luxury-list">
            <li>Natural cotton linens & handwoven throws</li>
            <li>Ayurvedic toiletries</li>
            <li>Access to spa, pool, orchard & food forest</li>
            <li>Wi-Fi in common areas</li>
          </ul>
        </div>
      </section>

      <PackagesPage />
    </div>
  );
};

export default StayPage;
