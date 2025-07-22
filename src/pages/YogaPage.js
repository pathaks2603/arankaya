import "../pages/YogaPage.css";
import yogGuru from "../assets/yogaRishi.jpeg";
import yogaImg from "../assets/retreat/yoga/yogameditation4.jpg";

const formBaseURL = "https://aranyakayogafoundation.com/";

const YogaPage = () => {
  return (
    <div className="yoga-page">
      {/* Hero Section */}
      <section
        className="yoga-hero d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(${yogaImg})`,
        }}
      >
        <div className="yoga-hero-overlay p-5">
          <h1 className="display-4 fw-bold">Yoga at Aranyaka</h1>
          <p className="lead-yoga">
            Begin your journey within, surrounded by nature’s embrace.
          </p>
          <button
            className="btn btn-outline-light btn-lg mt-3"
            onClick={() => window.open(formBaseURL, "_blank")}
          >
            Explore More
          </button>
        </div>
      </section>

      {/* The Aranyaka Way */}
      <section className="py-5 yoga-aranyaka-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="yoga-heading">Live the Aranyaka Way</h2>
              <p className="yoga-paragraph">
                Each day begins with sunrise yoga, flows into seva through
                gardening, creative expression, or shared skills, and ends with
                inspired community rituals. This is not a holiday; it’s a
                soulful reset into conscious, harmonious living.
              </p>
            </div>
            <div className="col-md-6">
              <div className="rounded yoga-schedule-box p-4">
                <h5 className="fw-bold mb-3">A Day at Aranyaka</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>6:00 AM</strong> – Surya Havan
                  </li>
                  <li>
                    <strong>7:00 AM</strong> – Sunrise Yoga Practice
                  </li>
                  <li>
                    <strong>8:30 AM</strong> – Organic Farm-Fresh Breakfast
                  </li>
                  <li>
                    <strong>10:00 AM</strong> – Seva: Gardening, Art, DIY, or
                    Shared Skills
                  </li>
                  <li>
                    <strong>1:30 PM</strong> – Wholesome Satvik Lunch
                  </li>
                  <li>
                    <strong>3:00 PM</strong> – Rest, Journaling or Spa Therapies
                  </li>
                  <li>
                    <strong>6:00 PM</strong> – Games, Talks, Screenings
                  </li>
                  <li>
                    <strong>8:00 PM</strong> – Dinner & Wind Down
                  </li>
                  <li>
                    <strong>9:00 PM</strong> – Yog Nidra
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru Section */}
      <section className="py-5 yoga-guru-section">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-5">
              <img
                src={yogGuru}
                alt="Dr. Yogesh Sharma"
                className="img-fluid rounded yoga-guru-image shadow"
              />
            </div>
            <div className="col-md-7">
              <h2 className="yoga-heading mb-3">
                Meet Our Yog Guru – Dr. Yogesh Sharma
              </h2>
              <p className="yoga-paragraph">
                Dr. Yogesh Sharma (Ph.D. in Yogic Science) brings sacred
                teachings from the Himalayan tradition. A life steeped in
                mantra, spiritual inquiry, and disciplined sadhana—he bridges
                ancient yoga wisdom with expressive arts.
              </p>
              <p className="yoga-paragraph">
                He holds a Ph.D. in Yoga Philosophy, a Master’s in Yoga, and a
                Bachelor’s in Indian Classical Music. Trained at Kailash Ashram,
                his sessions include:
              </p>
              <ul className="yoga-list">
                <li>Yoga Philosophy (Yoga Sutras & Gita)</li>
                <li>Yoga Psychology & Nidra Meditation</li>
                <li>Pranayama, Mantra, and Energy Healing</li>
              </ul>
              <p className="yoga-paragraph">
                Rooted in love, simplicity, and trust in the supreme reality,
                Dr. Yogesh helps seekers embrace higher consciousness and
                holistic peace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YogaPage;
