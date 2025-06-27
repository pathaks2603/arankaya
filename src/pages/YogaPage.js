import "../pages/YogaPage.css";
import yogGuru from "../assets/yogaRishi.jpeg";

const YogaPage = () => {
  return (
    <div className="yoga-page luxury-theme">
      {/* Hero Section */}
      <section
        className="hero-yoga d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`,
        }}
      >
        <div className="overlay p-5">
          <h1 className="display-4 fw-bold">Yoga at Aranyaka</h1>
          <p className="lead">
            Begin your journey within, surrounded by nature’s embrace.
          </p>
          <button className="btn btn-outline-light btn-lg mt-3">Join Us</button>
        </div>
      </section>

      {/* The Aranyaka Way */}
      <section className="py-5 bg-light-tint">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="elegant-heading">Live the Aranyaka Way</h2>
              <p className="luxury-paragraph">
                Each day begins with sunrise yoga, flows into seva through
                gardening, creative expression, or shared skills, and ends with
                inspired community rituals. This is not a holiday; it’s a
                soulful reset into conscious, harmonious living.
              </p>
            </div>
            <div className="col-md-6">
              <div className="rounded shadow bg-white p-4 schedule-mini-box">
                <h5 className="fw-bold mb-3">A Day at Aranyaka</h5>
                <ul className="list-unstyled">
                  <li>
                    <strong>6:00 AM</strong> – Sunrise Yoga Practice
                  </li>
                  <li>
                    <strong>8:00 AM</strong> – Organic Farm-Fresh Breakfast
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guru Section */}
      <section className="guru-section py-5">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-md-5">
              <img
                src={yogGuru}
                alt="Dr. Yogesh Sharma"
                className="img-fluid rounded guru-image shadow"
              />
            </div>
            <div className="col-md-7">
              <h2 className="elegant-heading mb-3">
                Meet Our Yog Guru – Dr. Yogesh Sharma
              </h2>
              <p className="luxury-paragraph">
                Dr. Yogesh Sharma (Ph.D. in Yogic Science) brings sacred
                teachings from the Himalayan tradition. A life steeped in
                mantra, spiritual inquiry, and disciplined sadhana—he bridges
                ancient yoga wisdom with expressive arts.
              </p>
              <p className="luxury-paragraph">
                He holds a Ph.D. in Yoga Philosophy, a Master’s in Yoga, and a
                Bachelor’s in Indian Classical Music. Trained at Kailash Ashram,
                his sessions include:
              </p>
              <ul className="luxury-list">
                <li>Yoga Philosophy (Yoga Sutras & Gita)</li>
                <li>Yoga Psychology & Nidra Meditation</li>
                <li>Pranayama, Mantra, and Energy Healing</li>
              </ul>
              <p className="luxury-paragraph">
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
