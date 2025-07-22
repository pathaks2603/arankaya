import "./WomenRetreatPage.css";
import bannerImg from "../../assets/retreat/women/women4.jpg";
import img1 from "../../assets/retreat/women/women2.jpg";
import img2 from "../../assets/retreat/women/women3.jpg";
import img3 from "../../assets/retreat/women/women1.jpg";
import img4 from "../../assets/retreat/women/women5.jpg";
import img5 from "../../assets/retreat/women/women6.jpg";
import img6 from "../../assets/retreat/women/women7.jpg";
import img7 from "../../assets/retreat/women/women8.jpg";

const WomenWellnessRetreatPage = () => {
  return (
    <div className="women-page">
      {/* Banner */}
      <section
        className="women-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="women-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🌺 Women’s Wellness Retreat</h1>
          <p className="women-tagline">Empower. Heal. Thrive.</p>
        </div>
      </section>

      <section className="women-container py-5">
        {/* Intro */}
        <p className="women-overview text-center mb-4">
          Rediscover balance, embrace vitality, and prioritize you. The Women’s
          Wellness Retreat at Aranyaka is a deeply nurturing experience designed
          to support women’s physical, emotional, and hormonal well-being.
          Through Ayurvedic wisdom, personalized therapies, and sisterhood, this
          retreat offers space to reconnect with your body and soul.
        </p>

        {/* Overview */}
        <h3 className="women-heading">🧭 Overview</h3>
        <p>
          Crafted especially for women balancing work, home, relationships, and
          self, this retreat helps you slow down and listen to your body. With
          consultations from specialized Ayurvedic doctors and a holistic
          program blending Ayurveda, Naturopathy, and Yogic practices, you will
          feel seen, supported, and revitalized.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="women-list">
          <li>
            Women navigating stress, hormonal imbalance, or life transitions
          </li>
          <li>
            Those seeking healing from menstrual, reproductive, or post-illness
            concerns
          </li>
          <li>Anyone looking to feel more alive, radiant, and connected</li>
        </ul>

        <img
          src={img1}
          className="women-img my-4 rounded shadow-sm"
          alt="Therapy"
        />

        {/* Daily Schedule */}
        <h3 className="women-heading">📅 Sample 5-Day Itinerary</h3>
        <div className="table-responsive mb-5">
          <table className="table women-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:30 AM</td>
                <td>Herbal Tonic & Gentle Morning Yoga</td>
              </tr>
              <tr>
                <td>8:00 AM</td>
                <td>Satvik Breakfast</td>
              </tr>
              <tr>
                <td>9:00 – 11:00 AM</td>
                <td>Doctor Consultation & Ayurvedic Therapy</td>
              </tr>
              <tr>
                <td>11:30 AM</td>
                <td>Naturopathy Treatment or Enema / Mud Bath</td>
              </tr>
              <tr>
                <td>1:00 PM</td>
                <td>Detox Lunch & Herbal Drink</td>
              </tr>
              <tr>
                <td>3:00 – 4:00 PM</td>
                <td>Shirodhara / Rose Honey Massage / GHT</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Restorative Yoga or Pranic Healing</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Light Dinner & Wellness Circle</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Yog Nidra or Journaling</td>
              </tr>
            </tbody>
          </table>
        </div>

        <img
          src={img5}
          className="women-img my-4 rounded shadow-sm"
          alt="Yoga session"
        />

        {/* Highlights images row */}
        <div className="row mb-3">
          <div className="col-md-4 mb-2">
            <img
              src={img2}
              className="women-feature-img rounded shadow-sm"
              alt="Highlights"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img4}
              className="women-feature-img rounded shadow-sm"
              alt="Stay"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img3}
              className="women-feature-img rounded shadow-sm"
              alt="Food"
            />
          </div>
        </div>

        {/* Highlights text row */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <WomenSection
              title="🌼 Highlights & Inclusions"
              list={[
                "Pulse diagnosis and Ayurveda consultation",
                "Panchakarma treatments: Shirodhara, Abhyanga, Herbal Potli, etc.",
                "Naturopathy: Mud therapy, hydrotherapy, sheet packs, enema",
                "Therapeutic yoga for women’s health",
                "Marma therapy, cupping, Shat kriyas, and leech therapy",
                "Ayurvedic facials, Rose honey massage, Herbal wraps",
                "Learning sessions on women’s holistic wellness",
                "Emotional release practices and community support",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <WomenSection
              title="🛏️ Stay & Amenities"
              list={[
                "Private or twin-share eco-conscious rooms",
                "Free Wi-Fi, tranquil workspaces, and spa access",
                "Heated pool, garden lounges, and wellness studio",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <WomenSection
              title="🍽️ Food & Nourishment"
              list={[
                "3 Ayurvedic meals daily curated for women’s balance",
                "Herbal teas, juices, and prescribed supplements",
                "Light, healing food personalized to your body type",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="women-heading mt-5">💰 Pricing & Inclusions</h3>
        <p>
          <strong>Package Includes:</strong> Accommodation (Private/Twin Share),
          Ayurvedic doctor consultation & pulse reading, all therapies as per
          prescription, herbal teas, meals, and supplements.
        </p>
        <p>
          <strong>Exclusions:</strong> Airport transfers (available on request),
          travel insurance & personal expenses, extra nights or add-on
          Panchakarma programs.
        </p>

        <img
          src={img6}
          className="women-img my-4 rounded shadow-sm"
          alt="Therapy moments"
        />

        {/* Booking */}
        <h3 className="women-heading">📝 How to Book</h3>
        <ul className="women-list mb-4">
          <li>📞 Call/WhatsApp: +91-8689928598</li>
          <li>📧 Email: wellness@aranyakafarm.com</li>
          <li>📝 Fill the Women’s Wellness Booking Form</li>
        </ul>
        <p className="mb-4">
          <em>
            Limited spots. Every woman receives personalized care and support.
          </em>
        </p>

        {/* Is This Retreat for You */}
        <h3 className="women-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="women-list mb-4">
          <li>You feel drained or emotionally out of sync</li>
          <li>
            You’re managing hormonal shifts, UTI, PCOS, or menopause symptoms
          </li>
          <li>You want to age gracefully and feel radiant again</li>
          <li>You crave space to heal, learn, and be supported as a woman</li>
        </ul>

        {/* Benefits */}
        <h3 className="women-heading">🌿 Benefits You’ll Receive</h3>
        <ul className="women-list mb-4">
          <li>Rebalanced hormones & regulated cycles</li>
          <li>Enhanced energy, sleep, and clarity</li>
          <li>Deep detoxification and cellular renewal</li>
          <li>Renewed emotional strength and body confidence</li>
          <li>Tools for sustainable health & self-care</li>
          <li>A circle of supportive, like-minded women</li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="women-cta mb-3">🌸 Ready to Prioritize You?</h4>
          <button className="btn btn-gold m-2">Book Now</button>
          <button className="btn btn-outline-gold m-2">Ask a Question</button>
          <button className="btn btn-outline-gold m-2">
            Explore All Retreats
          </button>
        </div>

        <img
          src={img7}
          className="women-img my-4 rounded shadow-sm"
          alt="Nature view"
        />
      </section>
    </div>
  );
};

const WomenSection = ({ title, list }) => (
  <>
    <h4 className="women-heading">{title}</h4>
    <ul className="women-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default WomenWellnessRetreatPage;
