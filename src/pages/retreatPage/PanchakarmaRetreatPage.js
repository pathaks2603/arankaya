import "./PanchakarmaRetreatPage.css";
import bannerImg from "../../assets/retreat/panchakarma/panchakarma1.jpg";
import img1 from "../../assets/retreat/panchakarma/panchakarma2.jpg";
import img2 from "../../assets/retreat/panchakarma/panchakarma3.jpg";
import img3 from "../../assets/retreat/panchakarma/panchakarma4.jpg";
import img4 from "../../assets/retreat/panchakarma/panchakarma5.jpg";
import img5 from "../../assets/retreat/panchakarma/panchakarma6.jpg";
import img6 from "../../assets/retreat/panchakarma/panchakarma7.jpg";
import img7 from "../../assets/retreat/panchakarma/panchakarma8.jpg";

const PanchakarmaRetreatPage = () => {
  return (
    <div className="panchakarma-page">
      {/* Banner */}
      <section
        className="panchakarma-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="panchakarma-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🌿 Panchakarma Retreat</h1>
          <p className="panchakarma-tagline">Purify. Rejuvenate. Awaken.</p>
        </div>
      </section>

      <section className="panchakarma-container py-5">
        {/* Intro */}
        <p className="panchakarma-overview text-center mb-4">
          Cleanse the body. Revive the senses. Realign with nature. The
          Ayurvedic Panchakarma Retreat at Aranyaka is a profound detoxification
          and rejuvenation experience based on the ancient science of Ayurveda.
          It’s a journey of restoration—one that brings balance to your doshas,
          resets your system, and leaves you deeply nourished, inside and out.
        </p>

        {/* Overview */}
        <h3 className="panchakarma-heading">🧭 Overview</h3>
        <p>
          This 7-day retreat offers a personalized Panchakarma program designed
          after a full Ayurvedic consultation. It includes preparatory therapies
          (Purvakarma), cleansing procedures (Virechana, Basti, etc.), and
          rejuvenating rasayana treatments—all within a serene, farm-based
          natural setting that supports deep healing.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="panchakarma-list">
          <li>Those looking for deep detox and realignment of body-mind</li>
          <li>
            Individuals with chronic lifestyle disorders or hormonal imbalance
          </li>
          <li>Anyone seeking a holistic path to long-term wellness</li>
        </ul>

        <img
          src={img1}
          className="panchakarma-img my-4 rounded shadow-sm"
          alt="Panchakarma therapy"
        />

        {/* Daily Schedule */}
        <h3 className="panchakarma-heading">
          📅 How your day with Panchakarma Flow will look like:
        </h3>
        <div className="table-responsive mb-5">
          <table className="table panchakarma-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 AM</td>
                <td>Herbal Detox Tea & Morning Self-Reflection</td>
              </tr>
              <tr>
                <td>6:30 – 7:30 AM</td>
                <td>Gentle Pranayama & Meditation</td>
              </tr>
              <tr>
                <td>8:00 AM</td>
                <td>Light Digestive Breakfast</td>
              </tr>
              <tr>
                <td>9:00 – 12:00 PM</td>
                <td>Panchakarma Treatment (as prescribed)</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Light Ayurvedic Lunch</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Rest / Journaling / Rasayana Therapy</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Yoga Nidra or Marma Point Therapy</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Herbal Soup or Rice Gruel</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Ayurvedic Talk or Guided Breath Session</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          <em>
            Each guest undergoes individualized consultation before treatment.
          </em>
        </p>

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={img3}
              className="panchakarma-feature-img rounded shadow-sm mb-2"
              alt="Highlights"
            />
            <PanchakarmaSection
              title="🌼 Highlights & Inclusions"
              list={[
                "Personalized Panchakarma plan by certified Ayurvedic doctors",
                "Authentic therapies including Abhyanga, Basti, Nasya, Virechana",
                "Daily herbal teas and Ayurvedic diet tailored to dosha",
                "Marma therapy, steam therapy, and detox massages",
                "Rasayana (rejuvenative) practices for long-term vitality",
                "Access to yoga, guided breathwork, and reflective practices",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img5}
              className="panchakarma-feature-img rounded shadow-sm mb-2"
              alt="Stay"
            />
            <PanchakarmaSection
              title="🛏️ Stay & Amenities"
              list={[
                "Comfortable double occupancy rooms for deep rest",
                "Ayurvedic massage oils and medicated steam treatments",
                "Access to herbal gardens, yoga shala, pool, and spa",
                "Organic bath products and calming Ayurvedic ambience",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img4}
              className="panchakarma-feature-img rounded shadow-sm mb-2"
              alt="Food"
            />
            <PanchakarmaSection
              title="🍽️ Food & Nourishment"
              list={[
                "Tridoshic meals: light, sattvic, and seasonal",
                "Warm broths, kitchari, healing gruels, and herbal infusions",
                "Foods tailored to support detox and digestion",
                "Based on classical Ayurvedic principles and local ingredients",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="panchakarma-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table panchakarma-table text-center">
            <thead>
              <tr>
                <th>Room Type</th>
                <th>Price (7 Days / 6 Nights)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shared Double Room</td>
                <td>₹38,000 per person</td>
              </tr>
              <tr>
                <td>Private Room</td>
                <td>₹46,000 per person</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Accommodation, Panchakarma plan &
          therapies, Ayurvedic meals & herbal supplements, daily doctor
          consultation, use of spa, yoga & meditation areas.
        </p>
        <p>
          <strong>Exclusions:</strong> Long-term medicine kits, advanced
          Rasayana products, travel to and from Aranyaka.
        </p>

        <img
          src={img6}
          className="panchakarma-img my-4 rounded shadow-sm"
          alt="Spa moment"
        />

        {/* How to Book */}
        <h3 className="panchakarma-heading">📝 How to Book</h3>
        <ul className="panchakarma-list mb-4">
          <li>📩 Fill out the Panchakarma Retreat Form</li>
          <li>📞 WhatsApp us at +91-XXXXXXX</li>
          <li>📋 Schedule a pre-retreat health consultation</li>
        </ul>
        <p className="mb-4">
          <em>
            Strictly limited to a small group for intensive personal care.
          </em>
        </p>

        {/* Is This Retreat For You */}
        <h3 className="panchakarma-heading">🙋‍♀️ Is This Retreat for You?</h3>
        <ul className="panchakarma-list mb-5">
          <li>You seek a deep detox—not just of the body, but the mind</li>
          <li>You want authentic, time-tested Ayurvedic healing</li>
          <li>You’re managing a health issue or need long-term reset</li>
          <li>You’re ready to commit to a gentle, powerful transformation</li>
        </ul>

        {/* Gallery */}
        <h3 className="panchakarma-heading">📸 Gallery</h3>
        <div className="row mb-4">
          <div className="col-md-4 mb-2">
            <img
              src={img2}
              className="panchakarma-feature-img rounded shadow-sm"
              alt="Gallery"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img7}
              className="panchakarma-feature-img rounded shadow-sm"
              alt="Herbal garden"
            />
          </div>
          <div className="col-md-4 mb-2">
            <img
              src={img1}
              className="panchakarma-feature-img rounded shadow-sm"
              alt="Meditation space"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="panchakarma-cta mb-3">
            🌱 Ready to Purify & Rejuvenate?
          </h4>
          <button className="btn btn-gold m-2">Book Your Retreat</button>
          <button className="btn btn-outline-gold m-2">Consult with Us</button>
          <button className="btn btn-outline-gold m-2">
            Explore More Retreats
          </button>
        </div>
      </section>
    </div>
  );
};

const PanchakarmaSection = ({ title, list }) => (
  <>
    <h4 className="panchakarma-heading">{title}</h4>
    <ul className="panchakarma-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default PanchakarmaRetreatPage;
