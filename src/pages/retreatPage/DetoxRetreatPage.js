import "./DetoxRetreatPage.css";
import bannerImg from "../../assets/retreat/detox1.jpg";
import img1 from "../../assets/retreat/detox2.jpg";
import img2 from "../../assets/retreat/detox3.jpg";
import img3 from "../../assets/retreat/Detox4.jpg";
import img4 from "../../assets/retreat/detox5.jpg";
import img5 from "../../assets/retreat/detox6.jpg";
import img6 from "../../assets/retreat/detox7.jpg";
import img7 from "../../assets/retreat/detox8.jpg";

const DetoxRetreatPage = () => {
  return (
    <div className="detox-page">
      {/* Banner */}
      <section
        className="detox-banner d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="detox-banner-overlay text-center text-white">
          <h1 className="display-4 fw-bold">🌿 Detoxification Retreat</h1>
          <p className="detox-tagline">Cleanse. Heal. Renew.</p>
        </div>
      </section>

      <section className="detox-container py-5">
        {/* Intro */}
        <p className="detox-overview text-center mb-4">
          Step into a journey of deep renewal and vibrant health. The
          Detoxification Retreat at Aranyaka is a gentle yet transformative
          experience designed to release physical toxins, emotional heaviness,
          and mental clutter. Surrounded by orchards and nourished by nature,
          this retreat is your invitation to restore balance from the inside
          out.
        </p>

        {/* Overview */}
        <h3 className="detox-heading">🧭 Overview</h3>
        <p>
          Whether you’re seeking relief from stress, chronic fatigue, or
          lifestyle imbalances, this 5-day detox retreat offers a supportive
          space to let go, reset, and realign. Rooted in Ayurvedic wisdom and
          holistic healing practices, each day is designed to restore your
          body’s natural vitality while nurturing your inner calm.
        </p>
        <p>
          <strong>Who It’s For:</strong>
        </p>
        <ul className="detox-list">
          <li>
            Individuals experiencing burnout, bloating, or chronic fatigue
          </li>
          <li>Those wanting to reset eating habits or support digestion</li>
          <li>Anyone seeking a holistic approach to wellness</li>
        </ul>

        <img
          src={img1}
          className="detox-img my-4 rounded shadow-sm"
          alt="Detox retreat"
        />

        {/* Daily Schedule */}
        <h3 className="detox-heading">📅 How your day will look like</h3>
        <div className="table-responsive mb-4">
          <table className="table detox-table text-center">
            <thead>
              <tr>
                <th>Time</th>
                <th>Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6:00 AM</td>
                <td>Detox Herbal Tea & Gentle Breathwork</td>
              </tr>
              <tr>
                <td>6:30 – 8:00 AM</td>
                <td>Detox Yoga (twists, lymphatic flow)</td>
              </tr>
              <tr>
                <td>8:30 AM</td>
                <td>Light Ayurvedic Breakfast</td>
              </tr>
              <tr>
                <td>10:00 – 12:00 PM</td>
                <td>Guided Cleansing Practices / Seva</td>
              </tr>
              <tr>
                <td>12:30 PM</td>
                <td>Nourishing Detox Lunch (grain-free, alkaline)</td>
              </tr>
              <tr>
                <td>2:00 – 4:00 PM</td>
                <td>Spa / Journaling / Silent Time</td>
              </tr>
              <tr>
                <td>4:30 – 5:30 PM</td>
                <td>Restorative Yoga or Guided Breath Meditation</td>
              </tr>
              <tr>
                <td>6:00 PM</td>
                <td>Healing Broth Dinner</td>
              </tr>
              <tr>
                <td>7:00 PM</td>
                <td>Yog Nidra / Herbal Compress Session</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4">
          <em>
            Includes optional herbal cleanses, oil massages, and liver/gut
            support therapies.
          </em>
        </p>

        <img
          src={img7}
          className="detox-img my-4 rounded shadow-sm"
          alt="Detox yoga"
        />

        {/* Highlights */}
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src={img3}
              className="detox-feature-img rounded shadow-sm mb-2"
              alt="Highlights"
            />
            <DetoxSection
              title="🌼 Highlights & Inclusions"
              list={[
                "Personalized detox plan based on Ayurvedic principles",
                "Detox-specific yoga sessions for lymphatic drainage and digestion",
                "Herbal teas, cleansing broths, sattvic meals",
                "Ayurvedic oil massages and body scrubs",
                "Daily breathwork and meditation for emotional detox",
                "Gentle seva to support movement and reflection",
                "End-of-day Yog Nidra for deep integration",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img4}
              className="detox-feature-img rounded shadow-sm mb-2"
              alt="Stay"
            />
            <DetoxSection
              title="🛏️ Stay & Amenities"
              list={[
                "Comfortable double occupancy rooms",
                "Access to spa therapies and treatments",
                "Heated swimming pool, pickleball court, and walking trails",
                "Use of yoga shala, gardens, and creative indoor spaces",
                "Organic bath products and filtered drinking water",
              ]}
            />
          </div>
          <div className="col-md-4 mb-3">
            <img
              src={img5}
              className="detox-feature-img rounded shadow-sm mb-2"
              alt="Food"
            />
            <DetoxSection
              title="🍽️ Food & Nourishment"
              list={[
                "Alkaline, plant-based meals to support detox pathways",
                "Fresh juices, herbal teas, and light sattvic dishes",
                "Gluten-free, dairy-free, and Ayurvedic detox protocols",
                "Food prepared with seasonal, local, and farm-grown ingredients",
              ]}
            />
          </div>
        </div>

        {/* Pricing */}
        <h3 className="detox-heading mt-5">💰 Pricing & Inclusions</h3>
        <div className="table-responsive mb-4">
          <table className="table detox-table text-center">
            <thead>
              <tr>
                <th></th>
                <th>3D/2N (Single)</th>
                <th>3D/2N (Double)</th>
                <th>7D/6N (Single)</th>
                <th>7D/6N (Double)</th>
                <th>14D/13N (Single)</th>
                <th>14D/13N (Double)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Detox Retreat</td>
                <td>₹15,000</td>
                <td>₹10,000</td>
                <td>₹30,000</td>
                <td>₹20,000</td>
                <td>₹60,000</td>
                <td>₹45,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Inclusions:</strong> Accommodation, all detox meals and
          drinks, yoga, meditation and guided sessions, herbal detox kit and
          consultations, access to spa, pool, and facilities.
        </p>
        <p>
          <strong>Exclusions:</strong> Advanced Panchakarma or add-on therapies
          (optional), travel to and from the retreat.
        </p>

        <img
          src={img6}
          className="detox-img my-4 rounded shadow-sm"
          alt="Detox spa"
        />

        {/* Booking */}
        <h3 className="detox-heading">📝 How to Book</h3>
        <ul className="detox-list mb-4">
          <li>📩 Fill out the Retreat Booking Form</li>
          <li>📞 Call or WhatsApp us at +91-XXXXXXX</li>
          <li>
            💬 Speak to our Wellness Coordinator to personalize your detox
          </li>
        </ul>
        <p className="mb-4">
          <em>Spots are limited for individual care and supervision.</em>
        </p>

        {/* CTA */}
        <div className="text-center mt-4">
          <h4 className="detox-cta mb-3">🌿 Ready to Cleanse & Renew?</h4>
          <button className="btn btn-gold m-2">Book Now</button>
          <button className="btn btn-outline-gold m-2">Ask a Question</button>
          <button className="btn btn-outline-gold m-2">
            Explore All Retreats
          </button>
        </div>

        <img
          src={img2}
          className="detox-img my-4 rounded shadow-sm"
          alt="Nature view"
        />
      </section>
    </div>
  );
};

const DetoxSection = ({ title, list }) => (
  <>
    <h4 className="detox-heading">{title}</h4>
    <ul className="detox-list mb-4">
      {list.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </>
);

export default DetoxRetreatPage;
