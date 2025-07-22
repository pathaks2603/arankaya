import "./NaturopathyRetreatPage.css";
import bannerImg from "../../assets/retreat/naturopathy/naturopathy1.jpg";
import img1 from "../../assets/retreat/naturopathy/naturopathy2.jpg";
import img2 from "../../assets/retreat/naturopathy/naturopathy3.jpg";
import img3 from "../../assets/retreat/naturopathy/naturopathy4.jpg";
import img4 from "../../assets/retreat/naturopathy/naturopathy5.jpg";
import img5 from "../../assets/retreat/naturopathy/naturopathy6.jpg";
import img6 from "../../assets/retreat/naturopathy/naturopathy7.jpg";
import img7 from "../../assets/retreat/naturopathy/naturopathy8.jpg";

const NaturopathyRetreatPage = () => {
  return (
    <div className="naturopathy-page">
      {/* Banner */}
      <section
        className="naturopathy-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="naturopathy-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🌿 Naturopathy Retreat</h1>
          <p className="naturopathy-tagline">Heal with Nature’s Intelligence</p>
        </div>
      </section>

      <section className="naturopathy-container py-5">
        {/* Intro */}
        <p className="naturopathy-overview text-center mb-4">
          Let the earth be your medicine and the air your healer. The
          Naturopathy Retreat at Aranyaka invites you to return to the roots of
          healing—through age-old practices, natural therapies, and deep rest.
          Designed to awaken your body’s innate ability to heal, this experience
          nurtures balance, restoration, and true vitality.
        </p>

        {/* Overview */}
        <h3 className="naturopathy-heading">🧭 Overview</h3>
        <p>
          Over 6 days, this retreat integrates core naturopathic principles—food
          as medicine, movement as therapy, and nature as guide. Ideal for those
          seeking natural alternatives to modern health struggles or a profound
          system reset, it’s a gentle but powerful experience in reconnecting
          with your body’s wisdom.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="naturopathy-list">
          <li>
            Individuals managing lifestyle disorders (e.g., acidity, fatigue,
            skin conditions)
          </li>
          <li>Anyone exploring holistic, non-invasive healing paths</li>
          <li>Those needing a physical, mental, and emotional detox</li>
        </ul>

        <img
          src={img1}
          className="naturopathy-img my-4 rounded shadow-sm"
          alt="Healing nature walk"
        />

        {/* Daily Schedule */}
        <h3 className="naturopathy-heading">📅 How your day will look like</h3>
        <div className="table-responsive mb-4">
          <table className="table naturopathy-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 AM</td>
                <td>Nature Walk & Herbal Infusion</td>
              </tr>
              <tr>
                <td>6:30 – 8:00 AM</td>
                <td>Cleansing Yoga (joint care, digestion focus)</td>
              </tr>
              <tr>
                <td>8:30 AM</td>
                <td>Raw or Lightly Steamed Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:00 PM</td>
                <td>Naturopathic Treatment Sessions</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Seasonal, Medicinal Plant-Based Lunch</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Mud Pack / Steam Bath / Hydrotherapy</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Restorative Yoga or Pranic Healing Meditation</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Herbal Soup Dinner</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Sound Bath / Yog Nidra</td>
              </tr>
            </tbody>
          </table>
        </div>

        <img
          src={img7}
          className="naturopathy-img my-4 rounded shadow-sm"
          alt="Therapy and relaxation"
        />

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={img3}
              className="naturopathy-feature-img rounded shadow-sm mb-2"
              alt="Highlights"
            />
            <NaturopathySection
              title="🌼 Highlights & Inclusions"
              list={[
                "Guided naturopathy therapies: hydro, mud, steam, and diet treatments",
                "Raw and healing foods crafted with seasonal herbs and local produce",
                "Personal consultation with a trained naturopath",
                "Breathwork, pranic healing, and silent reflection practices",
                "Wellness journaling and mindful observation",
                "Gentle seva in the gardens or healing spaces",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img4}
              className="naturopathy-feature-img rounded shadow-sm mb-2"
              alt="Stay"
            />
            <NaturopathySection
              title="🛏️ Stay & Amenities"
              list={[
                "Nature-facing double occupancy rooms",
                "Daily healing herbal infusions",
                "Access to spa, pool, yoga and therapy spaces",
                "Organic toiletries and filtered water",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img5}
              className="naturopathy-feature-img rounded shadow-sm mb-2"
              alt="Food"
            />
            <NaturopathySection
              title="🍽️ Food & Nourishment"
              list={[
                "Fresh juices, steamed meals, and sattvic herbal recipes",
                "Anti-inflammatory and gut-friendly diet",
                "Gluten-free and detox-friendly options",
                "Prepared using farm-grown herbs and seasonal produce",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="naturopathy-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table naturopathy-table text-center">
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Price (6 Days / 5 Nights)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shared Double Room</td>
                <td>₹24,000 per person</td>
              </tr>
              <tr>
                <td>Private Room</td>
                <td>₹31,000 per person</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Accommodation, all naturopathy meals and
          healing teas, therapy sessions and consultations, yoga and healing
          practices, use of spa, pool, and gardens.
        </p>
        <p>
          <strong>Exclusions:</strong> Optional advanced therapies or
          supplements, travel to and from Aranyaka.
        </p>

        <img
          src={img6}
          className="naturopathy-img my-4 rounded shadow-sm"
          alt="Sound bath session"
        />

        {/* Booking */}
        <h3 className="naturopathy-heading">📝 How to Book</h3>
        <ul className="naturopathy-list mb-4">
          <li>📩 Fill out the Retreat Booking Form</li>
          <li>📞 Call or WhatsApp us at +91-XXXXXXX</li>
          <li>💬 Schedule a wellness call with our in-house naturopath</li>
        </ul>
        <p className="mb-4">
          <em>Limited participants per batch for personalized care.</em>
        </p>

        {/* Is This Retreat for You */}
        <h3 className="naturopathy-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="naturopathy-list mb-4">
          <li>You prefer natural over pharmaceutical healing</li>
          <li>
            You struggle with chronic fatigue, digestive issues, or skin
            imbalances
          </li>
          <li>You seek stillness, nourishment, and true cellular renewal</li>
          <li>You want to learn nature-based self-care you can take home</li>
        </ul>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="naturopathy-cta mb-3">
            🌿 Ready to Heal the Natural Way?
          </h4>
          <button className="btn btn-gold m-2">Book Your Retreat</button>
          <button className="btn btn-outline-gold m-2">Contact Our Team</button>
          <button className="btn btn-outline-gold m-2">
            Explore Other Retreats
          </button>
        </div>
      </section>
    </div>
  );
};

// Reusable section component
const NaturopathySection = ({ title, list }) => (
  <>
    <h4 className="naturopathy-heading">{title}</h4>
    <ul className="naturopathy-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default NaturopathyRetreatPage;
