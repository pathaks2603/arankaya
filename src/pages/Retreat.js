import { useNavigate } from "react-router-dom";
import "../pages/Retreat.css";
import backgroundImage from "../assets/retreat/detox8.jpg";
import yogaImg from "../assets/retreat/yoga/yogameditation4.jpg";
import detoxImg from "../assets/retreat/detox2.jpg";
import weightImg from "../assets/retreat/weight/weightloss2.jpg";
import naturopathyImg from "../assets/retreat/naturopathy/naturopathy3.jpg";
import panchakarmaImg from "../assets/retreat/panchakarma/panchakarma2.jpg";
import stressImg from "../assets/retreat/pain/painmanage2.jpg";
import creativeImg from "../assets/retreat/women/women7.jpg";
import backgImage2 from "../assets/retreat/retreat3.jpg";

const retreats = [
  { name: "Yoga & Meditation", image: yogaImg, slug: "yoga-meditation" },
  { name: "Detoxification Retreat", image: detoxImg, slug: "detoxification" },
  { name: "Weight Loss Retreat", image: weightImg, slug: "weight-loss" },
  { name: "Naturopathy Retreat", image: naturopathyImg, slug: "naturopathy" },
  {
    name: "Ayurvedic Panchakarma Retreat",
    image: panchakarmaImg,
    slug: "panchakarma",
  },
  {
    name: "Stress Management Retreat",
    image: stressImg,
    slug: "stress-management",
  },
  { name: "Women Wellness Retreat", image: creativeImg, slug: "women" },
];

const RetreatsPage = () => {
  const navigate = useNavigate();

  const handleNavigate = (slug) => {
    navigate(`/retreats/${slug}`);
  };

  return (
    <div className="retreats-page">
      {/* Hero */}
      <section
        className="retreats-hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${backgImage2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh", // larger hero
          position: "relative",
        }}
      >
        <div className="hero-overlay-retreat"></div>
        <div className="container position-relative">
          <h1 className="hero-title">Retreats at Aranyaka</h1>
          <p className="hero-subtitle">“Choose the Journey Your Soul Needs”</p>
        </div>
      </section>

      <section className="container py-5">
        <p className="lead text-center text-muted mb-5 px-md-5">
          🌿 Each Aranyaka retreat is a curated sanctuary for mind, body, and
          spirit — blending traditional wisdom with serene luxury. Discover what
          your soul calls for.
        </p>

        <div className="row g-4">
          {retreats.map((retreat, idx) => (
            <div className="col-sm-6 col-md-4" key={idx}>
              <div
                className="retreat-card rounded overflow-hidden"
                onClick={() => handleNavigate(retreat.slug)}
              >
                <div className="retreat-image-wrapper">
                  <img
                    src={retreat.image}
                    alt={retreat.name}
                    className="retreat-image"
                  />
                  <div className="retreat-overlay d-flex align-items-center justify-content-center">
                    <h5 className="retreat-title mb-0">{retreat.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RetreatsPage;
